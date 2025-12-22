import { Component } from '@angular/core';
import { AuthFooter } from '../../Componant/AuthLayout/auth-footer/auth-footer';
import { AuthHeader } from '../../Componant/AuthLayout/auth-header/auth-header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthFooter, AuthHeader, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {}
