export interface UserModel {
  id: string;
  username: string;
  email: string;
  role: 'Administrateur' | 'Utilisateur' | 'Entreprise' | 'Visiteur';
  avatarUrl?: string;
  token?: string;
}
