import { IAuthService } from '@/shared/domain/auth/types';
import { AuthService } from './AuthService';
import { SupabaseAuthProvider } from './providers/SupabaseAuthProvider';
import { supabase } from '../supabase/config';

export function createAuthProvider(): IAuthService {
  // We're using Supabase as our auth provider
  const supabaseProvider = new SupabaseAuthProvider(supabase);
  return new AuthService(supabaseProvider);
}
