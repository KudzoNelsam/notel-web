import {UserModel} from '../models/user-model';

export interface IAuthenticationService {
  isConnected(): boolean;
  login(username: string): boolean;
  logout(): void;
  getUser(): UserModel | null;
  getMode(): string;
  getRole(): string;
  getUsername(): string;
}
