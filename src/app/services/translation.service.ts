import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<'en' | 'ar'>('en');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations = {
    en: {
      title: 'Prophets Tree in Islam',
      selectProphet: 'Select a Prophet',
      name: 'Name',
      arabicName: 'Arabic Name',
      era: 'Era',
      description: 'Description',
      noSelection: 'Select a prophet to view details',
      children: 'Descendants'
    },
    ar: {
      title: 'شجرة الأنبياء في الإسلام',
      selectProphet: 'اختر نبياً',
      name: 'الاسم',
      arabicName: 'الاسم العربي',
      era: 'الحقبة',
      description: 'الوصف',
      noSelection: 'اختر نبياً لعرض التفاصيل',
      children: 'الأحفاد'
    }
  };

  setLanguage(lang: 'en' | 'ar'): void {
    this.currentLanguage.next(lang);
    // Set document direction for RTL support
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getLanguage(): 'en' | 'ar' {
    return this.currentLanguage.value;
  }

  getCurrentLanguage(): 'en' | 'ar' {
    return this.currentLanguage.value;
  }

  translate(key: string): string {
    const lang = this.currentLanguage.value;
    return (this.translations[lang] as any)[key] || key;
  }

  getTranslations(): Observable<'en' | 'ar'> {
    return this.currentLanguage$;
  }
}