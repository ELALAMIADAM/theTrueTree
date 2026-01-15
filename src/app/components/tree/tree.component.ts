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
  readonly LEVEL_HEIGHT = 100;
  readonly NODE_RADIUS = 35;
  readonly HORIZONTAL_SPACING = 100;
  readonly TRUNK_WIDTH = 80;
  readonly TRUNK_START_X = 0; // Will be calculated as center
  
  // Expose Math to template
  Math = Math;

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
   * Calculate tree layout - organic tree style like traditional Islamic art
   * Muhammad (ﷺ) at the top as a sun/flower
   */
  calculateLayout(): void {
    this.width = Math.max(window.innerWidth - 100, 1600);
    
    // Organize prophets by era
    const levels = this.organizeProphetsByEra();
    this.height = levels.length * this.LEVEL_HEIGHT + 400;
    
    const centerX = this.width / 2;
    
    // Position each prophet in organic tree layout
    this.treeNodes = [];
    levels.forEach((levelProphets, levelIndex) => {
      const y = this.height - (levelIndex * this.LEVEL_HEIGHT) - 150; // Bottom to top
      
      // Special positioning for Muhammad (ﷺ) at the very top
      const muhammadIndex = levelProphets.findIndex(p => p.id === 25);
      let otherProphets = levelProphets;
      
      if (muhammadIndex !== -1) {
        // Muhammad as the sun/top flower
        const muhammad = levelProphets[muhammadIndex];
        this.treeNodes.push({
          prophet: muhammad,
          x: this.width - 250, // Top right like a sun
          y: 100,
          level: levelIndex
        });
        otherProphets = levelProphets.filter(p => p.id !== 25);
      }
      
      // Position other prophets in organic branch pattern
      if (otherProphets.length > 0) {
        if (levelIndex === 0) {
          // Adam at the base (trunk)
          otherProphets.forEach(prophet => {
            this.treeNodes.push({
              prophet,
              x: centerX,
              y: y,
              level: levelIndex
            });
          });
        } else {
          // Arrange in branches - alternating left and right
          const spreadFactor = Math.min(levelIndex * 60, 300);
          
          otherProphets.forEach((prophet, index) => {
            let xOffset = 0;
            
            if (otherProphets.length === 1) {
              xOffset = 0;
            } else if (otherProphets.length === 2) {
              xOffset = index === 0 ? -spreadFactor : spreadFactor;
            } else {
              // Distribute across the width
              const step = (spreadFactor * 2) / (otherProphets.length - 1);
              xOffset = -spreadFactor + (index * step);
            }
            
            this.treeNodes.push({
              prophet,
              x: centerX + xOffset,
              y: y,
              level: levelIndex
            });
          });
        }
      }
    });
    
    // Create links
    this.createLinks();
  }

  /**
   * Organize prophets by era (chronological order)
   * Separate Jacob's children from Muhammad's branch
   */
  organizeProphetsByEra(): Prophet[][] {
    // Define era-based groupings (bottom to top)
    const eraGroups = [
      [1], // Level 0: Adam
      [2, 3], // Level 1: Idris, Noah
      [4, 6, 5, 7], // Level 2: Hud, Abraham, Saleh, Lot
      [12, 9, 8], // Level 3:  Ishmael, Isaac, Shuayb
      [13, 10, 14], // Level 4: Jacob, Job, Dhul-Kifl
      [11], // Level 5: Joseph (Jacob's son)
      [15, 16], // Level 6: Moses, Aaron
      [17], // Level 7: David
      [18], // Level 8: Solomon
      [19, 20], // Level 9: Elijah, Elisha
      [21], // Level 10: Jonah
      [22], // Level 11: Zechariah
      [23, 24], // Level 12: John, Jesus
      [25] // Level 13: Muhammad ﷺ (top-left)
    ];
    
    const prophetMap = new Map(this.prophets.map(p => [p.id, p]));
    const levels: Prophet[][] = [];
    
    eraGroups.forEach((group, index) => {
      levels[index] = group
        .map(id => prophetMap.get(id))
        .filter((p): p is Prophet => p !== undefined);
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
   * Get SVG path for link - organic branch style
   */
  getLinkPath(link: TreeLink): string {
    const { from, to } = link;
    
    // Create organic curved branches
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    
    // Control points for natural branch curve
    const cp1x = from.x + dx * 0.2;
    const cp1y = from.y + dy * 0.3;
    const cp2x = to.x - dx * 0.2;
    const cp2y = to.y - dy * 0.7;
    
    return `M ${from.x},${from.y} 
            C ${cp1x},${cp1y} 
              ${cp2x},${cp2y} 
              ${to.x},${to.y}`;
  }
  
  /**
   * Get trunk path for tree base
   */
  getTrunkPath(): string {
    const centerX = this.width / 2;
    const trunkBottom = this.height - 100;
    const trunkTop = this.height - 300;
    const trunkWidth = this.TRUNK_WIDTH;
    
    return `M ${centerX - trunkWidth/2},${trunkBottom}
            L ${centerX - trunkWidth/3},${trunkTop}
            L ${centerX + trunkWidth/3},${trunkTop}
            L ${centerX + trunkWidth/2},${trunkBottom} Z`;
  }

  /**
   * Get prophet node color - flower centers
   */
  getNodeColor(prophet: Prophet): string {
    // Gold/yellow for Muhammad ﷺ (like the sun)
    if (prophet.id === 25) return '#FFD700';
    
    // Yellow/orange centers for flower nodes
    return '#FFA500';
  }

  /**
   * Handle mouse enter on prophet node
   */
  onProphetHover(event: MouseEvent, prophet: Prophet): void {
    this.hoveredProphet = prophet;
    // Fixed position for hover card - no movement
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

  /**
   * Generate star path for special prophets
   */
  getStarPath(cx: number, cy: number, outerRadius: number, innerRadius: number, points: number): string {
    let path = '';
    const angleStep = (Math.PI * 2) / points;
    
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i * angleStep / 2) - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      
      if (i === 0) {
        path = `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    
    path += ' Z';
    return path;
  }

  /**
   * Generate Quran.com link from verse reference
   * Format: "2:30-39" or "11:71" -> https://quran.com/fr/2?startingVerse=30
   */
  getQuranLink(reference: string): string {
    // Remove any extra text and get the verse reference
    const match = reference.match(/(\d+):(\d+)(-\d+)?/);
    
    if (match) {
      const surah = match[1];
      const verse = match[2];
      return `https://quran.com/fr/${surah}?startingVerse=${verse}`;
    }
    
    // Fallback to just the surah if no verse number
    const surahMatch = reference.match(/(\d+)/);
    if (surahMatch) {
      return `https://quran.com/fr/${surahMatch[1]}`;
    }
    
    return 'https://quran.com/fr';
  }
}
