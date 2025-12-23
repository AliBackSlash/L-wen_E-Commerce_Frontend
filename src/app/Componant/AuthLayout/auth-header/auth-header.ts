import { Component, inject, OnInit, Renderer2, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service.ts';
import { NgClass, DOCUMENT } from '@angular/common';
import { IListItemInfo } from '../../../Core/Interfaces/DevelopmentInterfaces/ilist-item-info.js';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-auth-header',
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './auth-header.html',
  styleUrl: './auth-header.scss',
})
export class AuthHeader implements OnInit {
  themeService = inject(ThemeService);
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);
  ShowAccountDropdown = signal(false);
  ShowSearchBox = signal(false);
  ShowMobileNav = signal(false);
  NavUrls!: Array<IListItemInfo>;

  SAD() {
    this.ShowSearchBox.update((value) => false);
    this.ShowMobileNav.update((value) => false);
    this.ShowAccountDropdown.update((value) => !value);
  }

  SSB() {
    this.ShowMobileNav.update((value) => false);
    this.ShowAccountDropdown.update((value) => false);
    this.ShowSearchBox.update((value) => !value);
  }
  SMN() {
    this.ShowAccountDropdown.update((value) => false);
    this.ShowSearchBox.update((value) => false);
    this.ShowMobileNav.update((value) => !value);
  }
  ngOnInit() {
    // Safely initializes theme based on browser storage
    this.themeService.initTheme();
    this.NavUrls = [
      { Title: 'الرئيسية', Path: '' },
      { Title: 'من نحن', Path: '/about' },
      { Title: 'تفاصيل المنتج', Path: '/details' },
      { Title: 'السلة', Path: '/cart' },
      { Title: 'الدفع', Path: '/checkout' },
      { Title: 'اتصل بنا', Path: '/contact' },
    ];
  }

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}
