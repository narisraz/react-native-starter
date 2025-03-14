import { User } from '@/features/shared/domain/entities/User';

export interface AuthUser extends User {
  emailVerified: boolean;
  authToken?: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

export interface IAuthService {
  login(credentials: AuthCredentials): Promise<AuthResponse>;
  register(credentials: AuthCredentials): Promise<AuthResponse>;
  logout(): Promise<void>;
  resetPassword(email: string): Promise<void>;
  getCurrentUser(): Promise<AuthUser | null>;
}
