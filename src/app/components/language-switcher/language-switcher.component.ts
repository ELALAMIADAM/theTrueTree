import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <button 
        class="lang-btn" 
        [class.active]="currentLang === 'en'"
        (click)="switchLanguage('en')">
        English
      </button>
      <button 
        class="lang-btn" 
        [class.active]="currentLang === 'ar'"
        (click)="switchLanguage('ar')">
        العربية
      </button>
    </div>
  `,
  styles: [`
    .language-switcher {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      justify-content: center;
    }

    .lang-btn {
      padding: 8px 16px;
      border: 2px solid #2e7d32;
      background-color: white;
      color: #2e7d32;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 14px;
    }

    .lang-btn:hover {
      background-color: #f0f0f0;
    }

    .lang-btn.active {
      background-color: #2e7d32;
      color: white;
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLang: 'en' | 'ar' = 'en';

  constructor(private translationService: TranslationService) {
    this.translationService.getTranslations().subscribe(lang => {
      this.currentLang = lang;
    });
  }

  switchLanguage(lang: 'en' | 'ar'): void {
    this.translationService.setLanguage(lang);
  }
}