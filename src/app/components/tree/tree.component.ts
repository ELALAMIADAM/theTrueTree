import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prophet } from '../../models/prophet.model';
import { ProphetService } from '../../services/prophet.service';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  prophetTree: Prophet | null = null;
  selectedProphet: Prophet | null = null;

  constructor(
    private prophetService: ProphetService,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.prophetTree = this.prophetService.getProphetTree();
  }

  onProphetSelected(prophet: Prophet): void {
    this.selectedProphet = prophet;
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}