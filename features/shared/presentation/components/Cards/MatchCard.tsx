import React from 'react';
import { 
  Box, 
  VStack, 
  Text, 
  HStack, 
  Avatar, 
  Icon, 
  Pressable,
  Badge
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export type MatchCardProps = {
  title: string;
  location: string;
  time: string;
  date: string;
  players: { id: string; avatar: string }[];
  onPress: () => void;
};

export const MatchCard = ({ title, location, time, date, players, onPress }: MatchCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box 
        bg="primary.600" 
        borderRadius="xl" 
        p={4} 
        width={220} 
        height={180}
        mr={4}
        shadow={3}
      >
        <VStack space={2} height="100%" justifyContent="space-between">
          <Badge 
            bg="rgba(255,255,255,0.2)" 
            _text={{ color: "white" }} 
            rounded="md"
            alignSelf="flex-start"
          >
            {date} - {time}
          </Badge>
          
          <Text color="white" fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          
          <HStack space={1} alignItems="center">
            <Icon as={Ionicons} name="location-outline" color="white" size="xs" />
            <Text color="white" fontSize="sm">
              {location}
            </Text>
          </HStack>
          
          <HStack justifyContent="space-between" alignItems="center">
            <HStack space={-2}>
              {players.map((player, index) => (
                <Avatar 
                  key={player.id} 
                  size="sm" 
                  source={{ uri: player.avatar }}
                  borderColor="primary.600"
                  borderWidth={2}
                />
              ))}
            </HStack>
            <Icon as={MaterialIcons} name="arrow-forward" color="white" size="sm" />
          </HStack>
        </VStack>
      </Box>
    </Pressable>
  );
};
