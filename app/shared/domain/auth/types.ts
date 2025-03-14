export interface AuthUser {
  id: string;
  email: string | undefined;
  displayName?: string;
  photoURL?: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface AuthResponse {
  user: AuthUser;
  token?: string;
}

export interface IAuthService {
  login(credentials: AuthCredentials): Promise<AuthResponse>;
  register(credentials: AuthCredentials): Promise<AuthResponse>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<AuthUser | null>;
  resetPassword(email: string): Promise<void>;
}
