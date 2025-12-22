import { Component, inject, OnInit, Renderer2, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service.ts';
import { NgClass, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-auth-header',
  imports: [NgClass],
  templateUrl: './auth-header.html',
  styleUrl: './auth-header.scss',
})
export class AuthHeader implements OnInit {
  private themeService = inject(ThemeService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  ShowAccountDropdown = signal(false);
  ShowSearchBox = signal(false);
  ShowMobileNav = signal(false);

  SAD() {
    this.ShowAccountDropdown.set(!this.ShowAccountDropdown());
  }

  SSB() {
    this.ShowSearchBox.set(!this.ShowSearchBox());
  }
  SMN() {
    const body = this.document.body;
    this.ShowMobileNav.update((value) => !value); // تبديل القيمة

    if (this.ShowMobileNav()) {
      this.renderer.addClass(body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(body, 'mobile-nav-active');
    }
  }
  ngOnInit() {
    // Safely initializes theme based on browser storage
    this.themeService.initTheme();
  }

  // Wrapper for the UI button
  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
