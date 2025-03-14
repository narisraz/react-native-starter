import { supabase } from '@/features/shared/infrastructure/services/supabase/SupabaseClient';
import { AuthCredentials, AuthResponse, AuthUser, IAuthService } from '@/features/auth/domain/types/auth.types';

export class AuthService implements IAuthService {
  private mapSupabaseUser(user: any): AuthUser {
    return {
      id: user.id,
      email: user.email!,
      displayName: user.user_metadata?.name,
      emailVerified: user.email_confirmed_at != null,
      createdAt: new Date(user.created_at),
      updatedAt: new Date(user.updated_at || user.created_at),
    };
  }

  async login({ email, password }: AuthCredentials): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return {
      user: this.mapSupabaseUser(data.user),
      session: data.session,
    };
  }

  async register({ email, password, displayName }: AuthCredentials): Promise<AuthResponse> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: displayName,
        },
      },
    });

    if (error) throw error;

    return {
      user: this.mapSupabaseUser(data.user!),
      session: data.session,
    };
  }

  async getCurrentUser(): Promise<AuthUser | null> {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) return null;

    return this.mapSupabaseUser(user);
  }

  async logout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  async resetPassword(email: string): Promise<void> {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) throw error;
  }

  async updateUser(updates: Partial<AuthUser>): Promise<AuthUser> {
    const { data: { user }, error } = await supabase.auth.updateUser({
      data: {
        name: updates.displayName,
      },
    });

    if (error || !user) throw error;

    return this.mapSupabaseUser(user);
  }
}

