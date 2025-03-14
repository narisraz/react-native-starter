import { User } from '@/features/shared/domain/entities/User';

export interface AuthUser extends User {
  emailVerified: boolean;
}

export interface AuthCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface AuthSession {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface AuthResponse {
  user: AuthUser;
  session: AuthSession | null;
}

export interface IAuthService {
  login(credentials: AuthCredentials): Promise<AuthResponse>;
  register(credentials: AuthCredentials): Promise<AuthResponse>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  getCurrentUser(): Promise<AuthUser | null>;
  updateUser(updates: Partial<AuthUser>): Promise<AuthUser>;
}
