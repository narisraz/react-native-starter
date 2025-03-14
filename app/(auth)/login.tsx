import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Heading, Input, VStack, useToast } from 'native-base';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/features/auth/presentation/providers/AuthProvider';

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      toast.show({
        title: t('common.error'),
        description: t('validation.required'),
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
      return;
    }

    try {
      setIsLoading(true);
      await login({ email, password });
      router.replace('/(dashboard)');
    } catch (error) {
      toast.show({
        title: t('common.error'),
        description: error instanceof Error ? error.message : t('login.errors.invalidCredentials'),
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, login, router, toast, t]);

  const handleRegister = useCallback(() => {
    router.push('/register');
  }, [router]);

  return (
    <Box flex={1} p={4} bg="white" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Heading size="lg">{t('login.title')}</Heading>
        <FormControl isRequired>
          <FormControl.Label>{t('login.emailPlaceholder')}</FormControl.Label>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder={t('login.emailPlaceholder')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{t('login.passwordPlaceholder')}</FormControl.Label>
          <Input
            value={password}
            onChangeText={setPassword}
            type="password"
            autoCapitalize="none"
            placeholder={t('login.passwordPlaceholder')}
          />
        </FormControl>
        <Button
          w="full"
          onPress={handleLogin}
          isLoading={isLoading}
          isLoadingText={t('common.loading')}
        >
          {t('login.submitButton')}
        </Button>
        <Button
          w="full"
          variant="ghost"
          onPress={handleRegister}
        >
          {t('login.signUp')}
        </Button>
      </VStack>
    </Box>
  );
}
