import { useCallback } from 'react';
import { useAuth } from '../../infrastructure/providers/AuthProvider';
import { useTranslation } from 'react-i18next';
import { AuthCredentials } from '../../domain/types/auth.types';

export const useAuthPresenter = () => {
  const { t } = useTranslation();
  const { user, loading, signIn, signUp, signOut } = useAuth();

  const handleSignIn = useCallback(
    async (credentials: AuthCredentials) => {
      try {
        await signIn(credentials);
      } catch (error) {
        throw new Error(t('auth.login.errors.invalidCredentials'));
      }
    },
    [signIn, t]
  );

  const handleSignUp = useCallback(
    async (credentials: AuthCredentials) => {
      try {
        await signUp(credentials);
      } catch (error) {
        if (error instanceof Error && error.message.includes('already exists')) {
          throw new Error(t('auth.register.errors.emailInUse'));
        }
        throw error;
      }
    },
    [signUp, t]
  );

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (error) {
      throw error;
    }
  }, [signOut]);

  return {
    user,
    loading,
    handleSignIn,
    handleSignUp,
    handleSignOut,
  };
};
