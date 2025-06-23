import { Component } from '@angular/core';
import { faHouse, faCompass, faStar, faBolt, faUser } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    FaIconComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) {
  }

  faHouse = faHouse;
  faCompass = faCompass;
  faStar = faStar;
  faBolt = faBolt;
  faUser = faUser;

  onAccueil() {
    this.router.navigateByUrl('');
  }
  onExplorer() {
    this.router.navigateByUrl('explorer');
  }
}

interface Menu {


}
