import {Component, OnInit, signal} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/impl/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  onLogout() {
      this.authService.logout();
      this.route.navigateByUrl('/login');

  }
  mode = signal("invité");
  isConnected  = signal(false);

  ngOnInit(): void {
    this.mode.update((value) => this.authService.getMode());
  }

  constructor(private authService: AuthenticationService, private route : Router) {

  }


  onLogin() {

  }
}
