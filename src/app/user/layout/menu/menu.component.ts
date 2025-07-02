import {Component, inject} from '@angular/core';
import {faBolt, faCompass, faHouse, faStar, faUser} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {Router} from '@angular/router';
import {PATHS} from '../../../routes/paths';
import {AuthenticationService} from '../../../shared/services/impl/authentication.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [
    FaIconComponent,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  private auth = inject(AuthenticationService);
  role = this.auth.roleSignal;

  faHouse = faHouse;
  faCompass = faCompass;
  faStar = faStar;
  faBolt = faBolt;
  faUser = faUser;

  constructor(private router: Router) {
  }

  public menuItems = [
    {
      label: 'Accueil',
      icon: this.faHouse,
      action: () => this.onAccueil(),
      rolesAllowed: ['Visiteur', 'Utilisateur', 'Entreprise', 'Administrateur'],
    },
    {
      label: 'Explorer',
      icon: this.faCompass,
      action: () => this.onExplorer(),
      rolesAllowed: ['Visiteur','Utilisateur', 'Entreprise', 'Administrateur'],
      isVisible: false
    },
    {
      label: 'Noter',
      icon: this.faStar,
      action: () => this.onNoter(),
      rolesAllowed: ['Visiteur','Utilisateur']
    },
    {
      label: 'Défis',
      icon: this.faBolt,
      action: () => this.onDefis(),
      rolesAllowed: ['Visiteur', 'Entreprise']
    },
    {
      label: 'Offres',
      icon: this.faUser,
      action: () => console.log('Offres'),
      rolesAllowed: ['Visiteur', 'Administrateur', 'Entreprise']
    }
  ];

  onAccueil() {
    this.router.navigateByUrl('');
  }

  onExplorer() {
    this.router.navigateByUrl(PATHS.HOME + '/' + PATHS.EXPLORER);
  }

  isAllowed(item: any): boolean {
    return item.rolesAllowed.includes(this.role());
  }

  private onNoter() {
    this.router.navigateByUrl(PATHS.HOME + '/' + PATHS.NOTER);

  }

  private onDefis() {

  }
}

