import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Heading, Input, VStack, useToast } from 'native-base';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useAuthPresenter } from '@/features/auth/presentation/hooks/useAuthPresenter';

export default function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleSignUp } = useAuthPresenter();
  const router = useRouter();
  const toast = useToast();

  const handleRegister = useCallback(async () => {
    if (!email || !password || !displayName) {
      toast.show({
        title: t('shared.common.error'),
        description: t('shared.validation.required'),
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
      return;
    }

    try {
      setIsLoading(true);
      await handleSignUp({ email, password, displayName });
      router.replace('/(dashboard)');
    } catch (error) {
      toast.show({
        title: t('shared.common.error'),
        description: error instanceof Error ? error.message : t('auth.register.errors.emailInUse'),
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, displayName, handleSignUp, router, toast, t]);

  const handleLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <Box flex={1} p={4} bg="white" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Heading size="lg">{t('auth.register.title')}</Heading>
        <FormControl isRequired>
          <FormControl.Label>{t('auth.register.displayNamePlaceholder')}</FormControl.Label>
          <Input
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
            placeholder={t('auth.register.displayNamePlaceholder')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{t('auth.register.emailPlaceholder')}</FormControl.Label>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder={t('auth.register.emailPlaceholder')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{t('auth.register.passwordPlaceholder')}</FormControl.Label>
          <Input
            value={password}
            onChangeText={setPassword}
            type="password"
            autoCapitalize="none"
            placeholder={t('auth.register.passwordPlaceholder')}
          />
          <FormControl.HelperText>
            {t('shared.validation.minLength', { count: 6 })}
          </FormControl.HelperText>
        </FormControl>
        <Button
          w="full"
          onPress={handleRegister}
          isLoading={isLoading}
          isLoadingText={t('shared.common.loading')}
        >
          {t('auth.register.submitButton')}
        </Button>
        <Button
          w="full"
          variant="ghost"
          onPress={handleLogin}
        >
          {t('auth.register.haveAccount')} {t('auth.register.signIn')}
        </Button>
      </VStack>
    </Box>
  );
}
