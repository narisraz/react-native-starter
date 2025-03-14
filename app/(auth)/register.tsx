import React, { useCallback, useState } from 'react';
import { Box, Button, FormControl, Heading, Input, VStack, useToast } from 'native-base';
import { useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

export default function Register() {
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
        title: 'Error',
        description: 'Please fill in all fields',
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
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to register',
        placement: 'top',
        variant: 'solid',
        backgroundColor: 'error.500'
      });
    } finally {
      setIsLoading(false);
    }
  }, [email, password, displayName, register, router, toast]);

  const handleLogin = useCallback(() => {
    router.push('/login');
  }, [router]);

  return (
    <Box flex={1} p={4} bg="white" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Heading size="lg">Create Account</Heading>
        <FormControl isRequired>
          <FormControl.Label>Display Name</FormControl.Label>
          <Input
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
            placeholder="Enter your name"
          />
        </FormControl>
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
            placeholder="Choose a password"
          />
          <FormControl.HelperText>
            Must be at least 6 characters
          </FormControl.HelperText>
        </FormControl>
        <Button
          w="full"
          onPress={handleRegister}
          isLoading={isLoading}
          isLoadingText="Creating account..."
        >
          Register
        </Button>
        <Button
          w="full"
          variant="ghost"
          onPress={handleLogin}
        >
          Already have an account? Login
        </Button>
      </VStack>
    </Box>
  );
}
