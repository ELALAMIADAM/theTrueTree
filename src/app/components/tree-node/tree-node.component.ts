import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prophet } from '../../models/prophet.model';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
  @Input() prophet!: Prophet;
  @Output() prophetSelected = new EventEmitter<Prophet>();

  isExpanded = true;
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translationService: TranslationService) {
    this.translationService.getTranslations().subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngOnInit(): void {
    if (!this.prophet) {
      console.warn('Prophet input is required for TreeNodeComponent');
    }
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  hasChildren(): boolean {
    return !!(this.prophet?.children && this.prophet.children.length > 0);
  }

  selectProphet(): void {
    this.prophetSelected.emit(this.prophet);
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}