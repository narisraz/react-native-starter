import { AuthCredentials, AuthResponse, AuthUser, IAuthService } from '@/shared/domain/auth/types';

export class AuthService implements IAuthService {
  private provider: IAuthService;

  constructor(provider: IAuthService) {
    this.provider = provider;
  }

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    return this.provider.login(credentials);
  }

  async register(credentials: AuthCredentials): Promise<AuthResponse> {
    return this.provider.register(credentials);
  }

  async logout(): Promise<void> {
    return this.provider.logout();
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    return this.provider.getCurrentUser();
  }

  async resetPassword(email: string): Promise<void> {
    return this.provider.resetPassword(email);
  }
}
