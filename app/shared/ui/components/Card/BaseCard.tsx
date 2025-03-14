import React from 'react';
import { Box, Heading, Text, VStack, useTheme } from 'native-base';

interface BaseCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const BaseCard: React.FC<BaseCardProps> = ({ title, description, children }) => {
  const { colors } = useTheme();

  return (
    <Box
      bg="white"
      shadow={2}
      rounded="lg"
      p={4}
      m={2}
    >
      <VStack space={2}>
        <Heading size="md" color={colors.primary[600]}>
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
        {children}
      </VStack>
    </Box>
  );
};
