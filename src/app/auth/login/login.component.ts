import {Component} from '@angular/core';
import {AuthenticationService} from '../../shared/services/impl/authentication.service';
import {Router} from '@angular/router';
import {PATHS} from '../../routes/paths';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any;
  password: any;
  errorMessage!: string;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  onLogin() {
    const success = this.authService.login(this.username);
    if (success) {
      this.router.navigateByUrl(PATHS.HOME); // ou /accueil
    } else {
      this.errorMessage = 'Identifiants incorrects';
    }
  }

  testApp() {
    this.authService.test();
    this.router.navigateByUrl(PATHS.HOME);

  }
}
