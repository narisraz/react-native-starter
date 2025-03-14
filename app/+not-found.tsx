import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Typography } from '@/features/shared/presentation/components/Typography/Typography';
import { Button } from '@/features/shared/presentation/components/Button/Button';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Typography variant="h2">This screen doesn't exist.</Typography>
        <Button 
          onPress={() => router.replace('/(dashboard)')} 
          variant="link"
        >
          Go to home screen!
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
