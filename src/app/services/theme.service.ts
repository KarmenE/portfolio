import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private readonly storageKey = 'dark-theme';

  toggleTheme(): void {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem(this.storageKey, JSON.stringify(isDark));
  }

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);
    const isDark = savedTheme ? JSON.parse(savedTheme) : false;
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
