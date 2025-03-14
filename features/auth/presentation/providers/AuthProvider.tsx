import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthUser, IAuthService, AuthResponse } from '@/features/auth/domain/types/auth.types';
import { AuthService } from '@/features/auth/infrastructure/services/AuthService';
import { supabase } from '@/features/shared/infrastructure/services/supabase/SupabaseClient';

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: IAuthService['login'];
  register: IAuthService['register'];
  logout: IAuthService['logout'];
  resetPassword: IAuthService['resetPassword'];
  updateUser: IAuthService['updateUser'];
}

const AuthContext = createContext<AuthContextType | null>(null);

// Initialize service following DDD principles
const authService = new AuthService();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
        }
      }
    );

    initAuth();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (credentials: Parameters<IAuthService['login']>[0]): Promise<AuthResponse> => {
    const response = await authService.login(credentials);
    setUser(response.user);
    return response;
  };

  const register = async (credentials: Parameters<IAuthService['register']>[0]): Promise<AuthResponse> => {
    const response = await authService.register(credentials);
    setUser(response.user);
    return response;
  };

  const logout = async (): Promise<void> => {
    await authService.logout();
    setUser(null);
  };

  const resetPassword = async (email: string): Promise<void> => {
    await authService.resetPassword(email);
  };

  const updateUser = async (updates: Parameters<IAuthService['updateUser']>[0]): Promise<AuthUser> => {
    const updatedUser = await authService.updateUser(updates);
    setUser(updatedUser);
    return updatedUser;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        resetPassword,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
