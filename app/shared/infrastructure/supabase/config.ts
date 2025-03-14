import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

// Infrastructure layer configuration following DDD principles
interface SupabaseConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const getSupabaseConfig = (): SupabaseConfig => {
  if (!SUPABASE_URL || typeof SUPABASE_URL !== 'string') {
    throw new Error('Missing or invalid SUPABASE_URL in environment configuration');
  }

  if (!SUPABASE_ANON_KEY || typeof SUPABASE_ANON_KEY !== 'string') {
    throw new Error('Missing or invalid SUPABASE_ANON_KEY in environment configuration');
  }

  return {
    supabaseUrl: SUPABASE_URL,
    supabaseAnonKey: SUPABASE_ANON_KEY
  };
};

const config = getSupabaseConfig();

// Create and export Supabase client with proper configuration
export const supabase = createClient(config.supabaseUrl, config.supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

