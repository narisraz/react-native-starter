import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthUser, IAuthService } from '@/shared/domain/auth/types';
import { createAuthProvider } from '@/shared/infrastructure/auth/createAuthProvider';

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: IAuthService['login'];
  register: IAuthService['register'];
  logout: IAuthService['logout'];
  resetPassword: IAuthService['resetPassword'];
}

const AuthContext = createContext<AuthContextType | null>(null);

const authService = createAuthProvider();

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
