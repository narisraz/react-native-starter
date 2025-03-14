import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Heading, Input, VStack, useToast } from 'native-base';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/features/auth/presentation/providers/AuthProvider';

export default function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleRegister = useCallback(async () => {
    if (!email || !password || !displayName) {
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
      await register({ email, password, displayName });
      router.replace('/(dashboard)');
    } catch (error) {
      toast.show({
        title: t('common.error'),
        description: error instanceof Error ? error.message : t('register.errors.emailInUse'),
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, displayName, register, router, toast, t]);

  const handleLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <Box flex={1} p={4} bg="white" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Heading size="lg">{t('register.title')}</Heading>
        <FormControl isRequired>
          <FormControl.Label>{t('register.displayNamePlaceholder')}</FormControl.Label>
          <Input
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
            placeholder={t('register.displayNamePlaceholder')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{t('register.emailPlaceholder')}</FormControl.Label>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder={t('register.emailPlaceholder')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{t('register.passwordPlaceholder')}</FormControl.Label>
          <Input
            value={password}
            onChangeText={setPassword}
            type="password"
            autoCapitalize="none"
            placeholder={t('register.passwordPlaceholder')}
          />
          <FormControl.HelperText>
            {t('validation.minLength', { count: 6 })}
          </FormControl.HelperText>
        </FormControl>
        <Button
          w="full"
          onPress={handleRegister}
          isLoading={isLoading}
          isLoadingText={t('common.loading')}
        >
          {t('register.submitButton')}
        </Button>
        <Button
          w="full"
          variant="ghost"
          onPress={handleLogin}
        >
          {t('register.haveAccount')} {t('register.signIn')}
        </Button>
      </VStack>
    </Box>
  );
}
