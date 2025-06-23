import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {HeaderComponent} from '../header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [
    MenuComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
