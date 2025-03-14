import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthUser, IAuthService } from '@/shared/domain/auth/types';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

AuthContext.displayName = 'AuthContext';

export function AuthProvider({ 
  children, 
  authService 
}: { 
  children: React.ReactNode;
  authService: IAuthService;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const checkUser = useCallback(async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
    } finally {
      setLoading(false);
    }
  }, [authService]);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const register = useCallback(async (email: string, password: string) => {
    try {
      const response = await authService.register({ email, password });
      setUser(response.user);
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const resetPassword = useCallback(async (email: string) => {
    try {
      await authService.resetPassword(email);
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const value = useMemo<AuthContextType>(() => ({
    user,
    loading,
    login,
    logout,
    register,
    resetPassword,
  }), [user, loading, login, logout, register, resetPassword]);

  return React.createElement(AuthContext.Provider, { value }, children);
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
