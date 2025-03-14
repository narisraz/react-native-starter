import React from 'react';
import { Box, VStack, ScrollView, Heading, useTheme } from 'native-base';
import { BaseCard } from '@/shared/ui/components/Card/BaseCard';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <Box flex={1} bg="gray.50" safeArea>
      <ScrollView>
        <VStack space={4} p={4}>
          <Heading size="xl" color={colors.primary[600]}>
            Welcome Back
          </Heading>

          <BaseCard
            title="Quick Overview"
            description="Your daily summary and important updates"
          />

          <BaseCard
            title="Recent Activity"
            description="Track your latest interactions and progress"
          />

          <BaseCard
            title="Getting Started"
            description="Learn how to make the most of your dashboard"
          />
        </VStack>
      </ScrollView>
    </Box>
  );
}
