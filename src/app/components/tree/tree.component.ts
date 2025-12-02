import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prophet, ProphetRelationship } from '../../models/prophet.model';
import { ProphetService } from '../../services/prophet.service';
import { TranslationService } from '../../services/translation.service';

interface TreeNode {
  prophet: Prophet;
  x: number;
  y: number;
  level: number;
}

interface TreeLink {
  from: TreeNode;
  to: TreeNode;
}

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  prophets: Prophet[] = [];
  relationships: ProphetRelationship[] = [];
  treeNodes: TreeNode[] = [];
  treeLinks: TreeLink[] = [];
  
  selectedProphet: Prophet | null = null;
  hoveredProphet: Prophet | null = null;
  hoverX: number = 0;
  hoverY: number = 0;
  showModal: boolean = false;
  
  // SVG dimensions
  width: number = 0;
  height: number = 0;
  
  // Layout configuration
  readonly LEVEL_HEIGHT = 150;
  readonly NODE_RADIUS = 40;
  readonly HORIZONTAL_SPACING = 120;

  constructor(
    private prophetService: ProphetService,
    public translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.calculateLayout();
    
    // Update dimensions on window resize
    window.addEventListener('resize', () => this.calculateLayout());
  }

  /**
   * Load prophet data from service
   */
  loadData(): void {
    const data = this.prophetService.getProphetData();
    this.prophets = data.prophets;
    this.relationships = data.relationships;
  }

  /**
   * Calculate tree layout - bottom to top (Adam at bottom, Muhammad at top)
   */
  calculateLayout(): void {
    this.width = Math.max(window.innerWidth - 100, 1200);
    
    // Organize prophets by level (generation)
    const levels = this.organizeProphetsIntoLevels();
    this.height = levels.length * this.LEVEL_HEIGHT + 200;
    
    // Position each prophet
    this.treeNodes = [];
    levels.forEach((levelProphets, levelIndex) => {
      const y = this.height - (levelIndex * this.LEVEL_HEIGHT) - 100; // Bottom to top
      const totalWidth = levelProphets.length * this.HORIZONTAL_SPACING;
      const startX = (this.width - totalWidth) / 2;
      
      levelProphets.forEach((prophet, index) => {
        this.treeNodes.push({
          prophet,
          x: startX + (index * this.HORIZONTAL_SPACING) + this.HORIZONTAL_SPACING / 2,
          y: y,
          level: levelIndex
        });
      });
    });
    
    // Create links
    this.createLinks();
  }

  /**
   * Organize prophets into levels based on their relationships
   */
  organizeProphetsIntoLevels(): Prophet[][] {
    const levels: Prophet[][] = [];
    const visited = new Set<number>();
    const prophetMap = new Map(this.prophets.map(p => [p.id, p]));
    
    // BFS to organize into levels
    const queue: { prophet: Prophet, level: number }[] = [];
    
    // Start with Adam (id: 1)
    const adam = prophetMap.get(1);
    if (adam) {
      queue.push({ prophet: adam, level: 0 });
      visited.add(adam.id);
    }
    
    while (queue.length > 0) {
      const { prophet, level } = queue.shift()!;
      
      // Add to level
      if (!levels[level]) {
        levels[level] = [];
      }
      levels[level].push(prophet);
      
      // Find descendants
      const descendants = this.relationships
        .filter(r => r.from === prophet.id && (r.type === 'descendant' || r.type === 'lineage'))
        .map(r => prophetMap.get(r.to))
        .filter((p): p is Prophet => p !== undefined && !visited.has(p.id));
      
      descendants.forEach(desc => {
        visited.add(desc.id);
        queue.push({ prophet: desc, level: level + 1 });
      });
    }
    
    // Add any remaining prophets (those not in main tree)
    this.prophets.forEach(p => {
      if (!visited.has(p.id)) {
        // Try to find their appropriate level based on era
        let targetLevel = 0;
        const ancestors = this.relationships
          .filter(r => r.to === p.id)
          .map(r => prophetMap.get(r.from))
          .filter((a): a is Prophet => a !== undefined);
        
        if (ancestors.length > 0) {
          // Find the highest level of ancestors
          ancestors.forEach(ancestor => {
            for (let i = 0; i < levels.length; i++) {
              if (levels[i].includes(ancestor)) {
                targetLevel = Math.max(targetLevel, i + 1);
              }
            }
          });
        }
        
        if (!levels[targetLevel]) {
          levels[targetLevel] = [];
        }
        levels[targetLevel].push(p);
        visited.add(p.id);
      }
    });
    
    return levels;
  }

  /**
   * Create links between prophets
   */
  createLinks(): void {
    this.treeLinks = [];
    const nodeMap = new Map(this.treeNodes.map(n => [n.prophet.id, n]));
    
    this.relationships.forEach(rel => {
      const from = nodeMap.get(rel.from);
      const to = nodeMap.get(rel.to);
      
      if (from && to && rel.type !== 'contemporary') {
        this.treeLinks.push({ from, to });
      }
    });
  }

  /**
   * Get SVG path for link
   */
  getLinkPath(link: TreeLink): string {
    const { from, to } = link;
    
    // Cubic bezier curve from bottom to top
    const midY = (from.y + to.y) / 2;
    
    return `M ${from.x},${from.y} 
            C ${from.x},${midY} 
              ${to.x},${midY} 
              ${to.x},${to.y}`;
  }

  /**
   * Get prophet node color based on lineage
   */
  getNodeColor(prophet: Prophet): string {
    // Color coding by lineage
    if (prophet.id === 1) return '#8B4513'; // Adam - brown
    if (prophet.id === 25) return '#FFD700'; // Muhammad - gold
    
    // Ishmael's line (Arab prophets) - Green shades
    const ishmaelLineage = [8, 25];
    if (ishmaelLineage.includes(prophet.id)) return '#2ECC71';
    
    // Isaac's line (Bani Israel) - Blue shades
    const isaacLineage = [9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    if (isaacLineage.includes(prophet.id)) return '#3498DB';
    
    // Direct descendants of Noah
    const noahDescendants = [3, 4, 5, 6, 7, 12];
    if (noahDescendants.includes(prophet.id)) return '#9B59B6';
    
    return '#95A5A6'; // Default gray
  }

  /**
   * Handle mouse enter on prophet node
   */
  onProphetHover(event: MouseEvent, prophet: Prophet): void {
    this.hoveredProphet = prophet;
    this.hoverX = event.clientX;
    this.hoverY = event.clientY;
  }

  /**
   * Handle mouse leave from prophet node
   */
  onProphetLeave(): void {
    this.hoveredProphet = null;
  }

  /**
   * Handle click on prophet node
   */
  onProphetClick(prophet: Prophet): void {
    this.selectedProphet = prophet;
    this.showModal = true;
  }

  /**
   * Close modal
   */
  closeModal(): void {
    this.showModal = false;
    this.selectedProphet = null;
  }

  /**
   * Get display name based on current language
   */
  getProphetName(prophet: Prophet): string {
    const lang = this.translationService.getCurrentLanguage();
    return lang === 'ar' ? prophet.arabicName : prophet.name;
  }

  /**
   * Open YouTube search for prophet
   */
  openYouTube(prophet: Prophet): void {
    const query = encodeURIComponent(`Prophet ${prophet.name} story Islam`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  }
}
