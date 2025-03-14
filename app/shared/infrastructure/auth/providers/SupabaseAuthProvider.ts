import { AuthCredentials, AuthResponse, AuthUser, IAuthService } from '@/shared/domain/auth/types';
import { AuthError, SupabaseClient, User } from '@supabase/supabase-js';

export class SupabaseAuthProvider implements IAuthService {
  constructor(private readonly supabase: SupabaseClient) {}

  private mapUser(supabaseUser: User): AuthUser {
    return {
      id: supabaseUser.id,
      email: supabaseUser.email,
      displayName: supabaseUser.user_metadata?.name,
      photoURL: supabaseUser.user_metadata?.avatar_url,
    };
  }

  private handleAuthError(error: AuthError): never {
    throw new Error(`Authentication error: ${error.message}`);
  }

  async login(credentials: AuthCredentials): Promise<AuthResponse> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) this.handleAuthError(error);
    if (!data.user) throw new Error('Login failed');

    return {
      user: this.mapUser(data.user),
      token: data.session?.access_token,
    };
  }

  async register(credentials: AuthCredentials): Promise<AuthResponse> {
    const { data, error } = await this.supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
      options: {
        data: {
          name: credentials.displayName,
        },
      }
    });

    if (error) this.handleAuthError(error);
    if (!data.user) throw new Error('Registration failed');

    return {
      user: this.mapUser(data.user),
      token: data.session?.access_token,
    };
  }

  async logout(): Promise<void> {
    const { error } = await this.supabase.auth.signOut();
    if (error) this.handleAuthError(error);
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    const { data: { user }, error } = await this.supabase.auth.getUser();
    if (error) this.handleAuthError(error);
    return user ? this.mapUser(user) : null;
  }

  async resetPassword(email: string): Promise<void> {
    const { error } = await this.supabase.auth.resetPasswordForEmail(email);
    if (error) this.handleAuthError(error);
  }
}
