// src/app/services/theme.service.ts
import { Injectable, inject, RendererFactory2, PLATFORM_ID, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  private renderer = inject(RendererFactory2).createRenderer(null, null);

  // Using a Signal to track the theme state globally
  currentTheme = signal<'light' | 'dark'>('dark');
  IsLightMode() {
    return this.currentTheme() === 'light';
  }
  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
      this.currentTheme.set(savedTheme);
      this.applyToDom(savedTheme);
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
      this.currentTheme.set(newTheme);
      this.applyToDom(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  }

  private applyToDom(theme: string) {
    this.renderer.setAttribute(this.document.documentElement, 'data-bs-theme', theme);
  }
}
