import React from 'react';
import { 
  Box, 
  VStack, 
  Text, 
  HStack, 
  Icon, 
  Pressable,
  Center
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export type ActionCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionType?: string;
  onPress: (actionType?: string) => void;
};

export const ActionCard = ({ title, description, icon, actionType, onPress }: ActionCardProps) => {
  return (
    <Pressable onPress={() => onPress(actionType)}>
      <Box 
        bg="white" 
        borderRadius="lg" 
        p={4} 
        mb={3}
        shadow={1}
        borderWidth={1}
        borderColor="gray.100"
      >
        <HStack space={3} alignItems="center">
          <Center 
            bg="gray.100" 
            p={2} 
            borderRadius="full"
          >
            {icon}
          </Center>
          <VStack flex={1}>
            <Text fontWeight="bold" fontSize="md">
              {title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {description}
            </Text>
          </VStack>
          <Icon as={Ionicons} name="chevron-forward" color="gray.400" />
        </HStack>
      </Box>
    </Pressable>
  );
};
