import React from 'react';
import { ScrollView, VStack } from 'native-base';
import { BaseCard } from '@/shared/ui/components/Card/BaseCard';

export default function DashboardScreen() {
  return (
    <ScrollView bg="gray.50" p={4}>
      <VStack space={4}>
        <BaseCard
          title="Welcome to Dashboard"
          description="Your centralized control center"
        />
        
        <BaseCard
          title="Quick Actions"
          description="Frequently used features and tools"
        />
        
        <BaseCard
          title="Recent Activity"
          description="Your latest updates and notifications"
        />
      </VStack>
    </ScrollView>
  );
}
