import { supabase } from './SupabaseClient';
import { AuthUser } from '@/features/auth/domain/types/auth.types';

export interface ISupabaseAuthService {
  signInWithPassword(email: string, password: string): Promise<any>;
  signUp(email: string, password: string, metadata?: Record<string, any>): Promise<any>;
  getUser(): Promise<any>;
  signOut(): Promise<any>;
  resetPasswordForEmail(email: string, redirectUrl: string): Promise<any>;
  updateUser(updates: Record<string, any>): Promise<any>;
  onAuthStateChange(callback: (event: string, session: any) => void): { subscription: { unsubscribe: () => void } };
}

export class SupabaseAuthService implements ISupabaseAuthService {
  async signInWithPassword(email: string, password: string) {
    return supabase.auth.signInWithPassword({ email, password });
  }

  async signUp(email: string, password: string, metadata?: Record<string, any>) {
    return supabase.auth.signUp({
      email,
      password,
      options: { data: metadata },
    });
  }

  async getUser() {
    return supabase.auth.getUser();
  }

  async signOut() {
    return supabase.auth.signOut();
  }

  async resetPasswordForEmail(email: string, redirectUrl: string) {
    return supabase.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl });
  }

  async updateUser(updates: Record<string, any>) {
    return supabase.auth.updateUser({ data: updates });
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
    return { subscription };
  }
}
