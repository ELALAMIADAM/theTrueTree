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
      position: fixed;
      top: 20px;
      right: 20px;
      display: flex;
      gap: 8px;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      padding: 8px;
      border-radius: 25px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(10px);
    }

    .lang-btn {
      padding: 10px 20px;
      border: 2px solid transparent;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
      font-size: 14px;
      opacity: 0.6;
    }

    .lang-btn:hover {
      opacity: 0.8;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    .lang-btn.active {
      opacity: 1;
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    @media (max-width: 768px) {
      .language-switcher {
        top: 10px;
        right: 10px;
        padding: 5px;
      }

      .lang-btn {
        padding: 8px 15px;
        font-size: 12px;
      }
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