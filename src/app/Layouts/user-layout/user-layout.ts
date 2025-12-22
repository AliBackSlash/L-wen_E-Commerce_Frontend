import { Component } from '@angular/core';
import { UserHeader } from '../../Componant/UserLayout/user-header/user-header';
import { RouterOutlet } from '@angular/router';
import { UserFooter } from '../../Componant/UserLayout/user-footer/user-footer';

@Component({
  selector: 'app-user-layout',
  imports: [UserHeader, RouterOutlet, UserFooter],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
