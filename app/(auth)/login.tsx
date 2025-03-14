import React from 'react';
import { Box, Button, FormControl, Input, VStack, Heading, useTheme, Link } from 'native-base';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const handleLogin = () => {
    // Login logic will be handled by auth service
    router.replace('/');
  };

  return (
    <Box flex={1} p={4} bg="white">
      <VStack space={4} mt={4}>
        <Heading color={colors.primary[600]} textAlign="center">
          Welcome Back
        </Heading>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
            type="text"
            placeholder="Enter your email"
            autoCapitalize="none"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input 
            type="password"
            placeholder="Enter your password"
          />
        </FormControl>
        <Button onPress={handleLogin} mt={4}>
          Sign In
        </Button>
        <Link 
          onPress={() => router.push('../register')}
          _text={{ color: colors.primary[600] }}
          alignSelf="center"
        >
          New user? Create an account
        </Link>
      </VStack>
    </Box>
  );
}
