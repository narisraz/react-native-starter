import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Heading, Input, VStack, useToast } from 'native-base';
import { useRouter } from 'expo-router';
import { useAuth } from '@/features/auth/presentation/providers/AuthProvider';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      toast.show({
        title: 'Error',
        description: 'Please enter your email and password',
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
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to login',
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, login, router, toast]);

  const handleRegister = useCallback(() => {
    router.push('/register');
  }, [router]);

  return (
    <Box flex={1} p={4} bg="white" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Heading size="lg">Welcome Back</Heading>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            value={password}
            onChangeText={setPassword}
            type="password"
            autoCapitalize="none"
            placeholder="Enter your password"
          />
        </FormControl>
        <Button
          w="full"
          onPress={handleLogin}
          isLoading={isLoading}
          isLoadingText="Logging in..."
        >
          Login
        </Button>
        <Button
          w="full"
          variant="ghost"
          onPress={handleRegister}
        >
          Create Account
        </Button>
      </VStack>
    </Box>
  );
}
