import React from 'react';
import { Stack } from 'expo-router';
import { Box, HStack, Icon, Pressable, Text, useTheme } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardLayout() {
  const { colors } = useTheme();

  return (
    <Box flex={1} safeArea>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary[600],
          },
          headerTintColor: 'white',
          headerRight: () => (
            <HStack space={2} mr={2}>
              <Pressable>
                <Icon 
                  as={MaterialIcons}
                  name="notifications"
                  size={6}
                  color="white"
                />
              </Pressable>
            </HStack>
          ),
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Dashboard',
          }}
        />
      </Stack>
    </Box>
  );
}
