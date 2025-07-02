import {Component, OnInit, signal} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/impl/authentication.service';
import {Router} from '@angular/router';
import {PATHS} from '../../../routes/paths';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  onLogout() {
      this.authService.logout();
      this.route.navigateByUrl(PATHS.HOME);
      this.isConnected.update(() => this.authService.isConnected());
    this.mode.update((value) => this.authService.getMode());


  }
  mode = signal("Invité");
  isConnected  = signal(false);

  ngOnInit(): void {
    console.log(this.authService.getMode())
    this.mode.update((value) => this.authService.getMode());
    this.isConnected.update(() => this.authService.isConnected());

  }

  constructor(private authService: AuthenticationService, private route : Router) {}


  onLogin() {
    this.route.navigateByUrl(PATHS.LOGIN);
    this.isConnected.update(() => this.authService.isConnected());
    this.mode.update((value) => this.authService.getMode());
  }
}
