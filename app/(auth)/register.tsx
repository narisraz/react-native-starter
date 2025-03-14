import React from 'react';
import { Box, Button, FormControl, Input, VStack, Heading, useTheme, Link } from 'native-base';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const handleRegister = () => {
    // Registration logic will be handled by auth service
    router.replace('/');
  };

  return (
    <Box flex={1} p={4} bg="white">
      <VStack space={4} mt={4}>
        <Heading color={colors.primary[600]} textAlign="center">
          Create Account
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
            placeholder="Create a password"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input 
            type="password"
            placeholder="Confirm your password"
          />
        </FormControl>
        <Button onPress={handleRegister} mt={4}>
          Sign Up
        </Button>
        <Link 
          onPress={() => router.push('../login')}
          _text={{ color: colors.primary[600] }}
          alignSelf="center"
        >
          Already have an account? Sign In
        </Link>
      </VStack>
    </Box>
  );
}
