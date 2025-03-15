import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, VStack, Heading, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import { BottomNavBar } from '@/features/shared/presentation/components/Navigation/BottomNavBar';

export default function MatchScreen() {
  const { t } = useTranslation();

  return (
    <Box flex={1} bg="gray.50" safeAreaTop>
      <VStack flex={1} px={4} pt={4} space={4}>
        <Heading size="xl" color="gray.900">
          {t('shared.navigation.match')}
        </Heading>
        <Text color="gray.600">
          {t('shared.screens.match.description')}
        </Text>
      </VStack>
      
      {/* Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
