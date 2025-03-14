import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthUser, IAuthService } from '@/features/auth/domain/types/auth.types';
import { HttpClient } from '@/features/shared/infrastructure/services/api/HttpClient';
import { AuthService } from '@/features/auth/infrastructure/services/AuthService';

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: IAuthService['login'];
  register: IAuthService['register'];
  logout: IAuthService['logout'];
  resetPassword: IAuthService['resetPassword'];
}

const AuthContext = createContext<AuthContextType | null>(null);

// Initialize services following dependency injection pattern
const httpClient = new HttpClient({ baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000' });
const authService = new AuthService(httpClient);

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

    initAuth();
  }, []);

  const login: IAuthService['login'] = async (credentials) => {
    const response = await authService.login(credentials);
    setUser(response.user);
    return response;
  };

  const register: IAuthService['register'] = async (credentials) => {
    const response = await authService.register(credentials);
    setUser(response.user);
    return response;
  };

  const logout: IAuthService['logout'] = async () => {
    await authService.logout();
    setUser(null);
  };

  const resetPassword: IAuthService['resetPassword'] = async (email) => {
    await authService.resetPassword(email);
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
