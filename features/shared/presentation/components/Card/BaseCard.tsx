import React from 'react';
import { Box, Heading, Text } from 'native-base';

interface BaseCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Box
      bg="white"
      rounded="lg"
      shadow={2}
      p={4}
    >
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600" mb={children ? 4 : 0}>
        {description}
      </Text>
      {children}
    </Box>
  );
};
