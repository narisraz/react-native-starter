import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { router } from 'expo-router';
import { AuthService } from '../services/AuthService';
import { AuthUser, AuthCredentials } from '../../domain/types/auth.types';


interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (credentials: AuthCredentials) => Promise<void>;
  signUp: (credentials: AuthCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const authService = new AuthService();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    const { subscription } = authService.onAuthStateChange(
      async (event) => {
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          checkUser();
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          router.replace('/login');
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [authService]);

  const signIn = useCallback(async (credentials: AuthCredentials) => {
    try {
      const { user } = await authService.login(credentials);
      setUser(user);
      router.replace('/');
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const signUp = useCallback(async (credentials: AuthCredentials) => {
    try {
      const { user } = await authService.register(credentials);
      setUser(user);
      router.replace('/');
    } catch (error) {
      throw error;
    }
  }, [authService]);

  const signOut = useCallback(async () => {
    try {
      await authService.logout();
      setUser(null);
      router.replace('/login');
    } catch (error) {
      throw error;
    }
  }, [authService]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
