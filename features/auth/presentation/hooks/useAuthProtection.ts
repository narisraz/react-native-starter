import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuthPresenter } from './useAuthPresenter';

export const useAuthProtection = () => {
  const router = useRouter();
  const { user } = useAuthPresenter();

  useEffect(() => {
    if (user) {
      router.replace('/(dashboard)');
    }
  }, [user, router]);
};
