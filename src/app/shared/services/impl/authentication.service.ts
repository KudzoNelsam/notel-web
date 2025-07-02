import {computed, Injectable, signal} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {UserModel} from '../../models/user-model';
import {IAuthenticationService} from '../IAuthenticationService';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IAuthenticationService {

  private users: UserModel[] = [
    {
      id: '1',
      username: 'admin01',
      email: 'admin@example.com',
      role: 'Administrateur',
      avatarUrl: 'https://i.pravatar.cc/150?img=1'
    },
    {
      id: '2',
      username: 'nelsam',
      email: 'user@example.com',
      role: 'Utilisateur',
      avatarUrl: 'https://i.pravatar.cc/150?img=2'
    },
    {
      id: '3',
      username: 'entrepriseX',
      email: 'entreprise@example.com',
      role: 'Entreprise',
      avatarUrl: 'https://i.pravatar.cc/150?img=3'
    },
    {
      id: '4',
      username: 'invité42',
      email: 'invite@example.com',
      role: 'Visiteur'
    }
  ];

  private isAuthenticated = signal<boolean>(false);
  private currentUser = signal<UserModel | null>(null);
  readonly roleSignal = computed(() => this.currentUser()?.role ?? 'Visiteur');
  constructor(private cookieService: CookieService) {
    this.loadUserFromCookies();
  }

  login(username: string): boolean {
    const user = this.users.find(u => u.username === username);
    if (user) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      this.cookieService.set('auth_username', user.username);
      this.cookieService.set('auth_role', user.role);
      if (user.avatarUrl) this.cookieService.set('auth_avatar', user.avatarUrl);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.cookieService.delete('auth_username');
    this.cookieService.delete('auth_role');
    this.cookieService.delete('auth_avatar');
  }

  isConnected(): boolean {
    return this.isAuthenticated();
  }

  getMode(): string {
    return this.currentUser()?.role || 'Visiteur';
  }

  getUser(): UserModel | null {
    return this.currentUser();
  }

  getRole(): string {
    return this.currentUser()?.role || 'Visiteur';
  }

  getUsername(): string {
    return this.currentUser()?.username || 'Invité';
  }

  private loadUserFromCookies(): void {
    const username = this.cookieService.get('auth_username');
    if (username) {
      const user = this.users.find(u => u.username === username);
      if (user) {
        this.currentUser.set(user);
        this.isAuthenticated.set(true);
      }
    }
  }

  test() {
    this.isAuthenticated.set(true);

  }
}
