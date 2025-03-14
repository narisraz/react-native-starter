import { HttpClient } from '@/features/shared/infrastructure/services/api/HttpClient';
import { AuthCredentials, AuthResponse, AuthUser, IAuthService } from '@/features/auth/domain/types/auth.types';

export class AuthService implements IAuthService {
  constructor(private httpClient: HttpClient) {}

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await this.httpClient.post<AuthResponse>('/auth/login', credentials);
    this.httpClient.setAuthToken(response.token);
    return response;
  }

  async register(credentials: AuthCredentials): Promise<AuthResponse> {
    const response = await this.httpClient.post<AuthResponse>('/auth/register', credentials);
    this.httpClient.setAuthToken(response.token);
    return response;
  }

  async logout(): Promise<void> {
    await this.httpClient.post('/auth/logout', {});
    this.httpClient.removeAuthToken();
  }

  async resetPassword(email: string): Promise<void> {
    await this.httpClient.post('/auth/reset-password', { email });
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      return await this.httpClient.get<AuthUser>('/auth/me');
    } catch (error) {
      return null;
    }
  }
}
