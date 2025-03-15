import React, { useCallback, useState } from 'react';
import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Heading, 
  Icon, 
  Button, 
  ScrollView,
  Pressable,
  Center,
  Divider,
  Circle,
  Avatar
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Calendar day type
type CalendarDay = {
  day: number;
  isSelected?: boolean;
};

export default function MatchDetailsScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  
  // Mock data for the match details
  const matchDetails = {
    id: id as string,
    title: 'Urban Padel',
    reservation: '#780023',
    date: '15 fév. 2025',
    time: '9h00 pour 2h00',
    location: '4 Rue Paul Langevin ZI du Hellu, 59260 Lezennes',
    court: 'Terrain 6',
    players: [
      { id: '1', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { id: '2', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    ],
    opponents: [
      { id: '3', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
      { id: '4', avatar: 'https://randomuser.me/api/portraits/women/28.jpg' },
    ],
    equipment: 'Location de 2 raquettes',
    paymentMethod: 'Payé par carte bancaire',
    paymentStatus: '4/4 parts payés',
  };

  // Calendar data
  const calendarDays: CalendarDay[] = [
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15, isSelected: true },
    { day: 16 },
    { day: 17 },
    { day: 18 },
  ];

  const handleBackPress = useCallback(() => {
    router.back();
  }, [router]);

  const handleMatchSheetPress = useCallback(() => {
    // Handle match sheet action
    console.log('Match sheet pressed');
  }, []);

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <StatusBar style="light" />
      
      {/* Purple Header */}
      <Box bg="purple.600" pt={2} pb={6} px={4}>
        <Pressable onPress={handleBackPress} hitSlop={8} mb={2}>
          <Icon as={Ionicons} name="arrow-back" size="md" color="white" />
        </Pressable>
        
        <Text color="white" fontSize="md" fontWeight="medium" mt={2}>
          {t('shared.screens.matchDetails.onCourt')} 🎾
        </Text>
        <Heading color="white" size="lg">
          {t('shared.screens.matchDetails.upcomingMatches')}
        </Heading>
      </Box>
      
      {/* Calendar Section */}
      <Box px={4} mt={-2} bg="white" borderTopRadius="2xl">
        <HStack justifyContent="space-between" alignItems="center" py={3}>
          <Text fontSize="md" fontWeight="medium">Février 2025</Text>
          <HStack space={2}>
            <Icon as={Ionicons} name="chevron-back" size="sm" color="gray.400" />
            <Icon as={Ionicons} name="chevron-forward" size="sm" color="gray.400" />
          </HStack>
        </HStack>
        
        {/* Calendar Days */}
        <HStack justifyContent="space-between" mb={1}>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">L</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">M</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">M</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">J</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">V</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">S</Text>
          <Text fontSize="xs" color="gray.500" textAlign="center" width="30px">D</Text>
        </HStack>
        
        <HStack justifyContent="space-between" mb={4}>
          {calendarDays.map((day) => (
            <Center 
              key={day.day} 
              width="30px" 
              height="30px" 
              borderRadius="full"
              bg={day.isSelected ? "purple.600" : "transparent"}
            >
              <Text 
                fontSize="sm" 
                fontWeight={day.isSelected ? "bold" : "normal"}
                color={day.isSelected ? "white" : "black"}
              >
                {day.day}
              </Text>
            </Center>
          ))}
        </HStack>
      </Box>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Match Card */}
        <Box mx={4} mb={4} bg="white" borderRadius="lg" shadow={2} p={4}>
          {/* Date & Time */}
          <HStack bg="gray.100" p={2} borderRadius="md" mb={4} alignItems="center">
            <Icon as={Ionicons} name="calendar" size="xs" color="black" mr={1} />
            <Text fontSize="xs" fontWeight="medium">15 fév. 2025 • 9h00</Text>
          </HStack>
          
          {/* Match Title */}
          <Heading size="md" mb={1}>
            {matchDetails.title}
          </Heading>
          <Text fontSize="xs" color="gray.500" mb={4}>
            Réservation #{matchDetails.reservation}
          </Text>
          
          {/* Location */}
          <HStack space={2} mb={2} alignItems="flex-start">
            <Icon as={Ionicons} name="location-outline" size="sm" color="gray.500" mt={1} />
            <Text fontSize="sm" color="gray.700" flex={1}>
              {matchDetails.location}
            </Text>
          </HStack>
          
          {/* Time */}
          <HStack space={2} mb={2} alignItems="flex-start">
            <Icon as={Ionicons} name="time-outline" size="sm" color="gray.500" mt={1} />
            <Text fontSize="sm" color="gray.700">
              {matchDetails.time}
            </Text>
          </HStack>
          
          {/* Court */}
          <HStack space={2} mb={4} alignItems="flex-start">
            <Icon as={MaterialIcons} name="sports-tennis" size="sm" color="gray.500" mt={1} />
            <Text fontSize="sm" color="gray.700">
              {matchDetails.court}
            </Text>
          </HStack>
          
          {/* Players */}
          <HStack space={2} mb={4} alignItems="center" justifyContent="center">
            <HStack>
              {matchDetails.players.map((player, index) => (
                <Box key={player.id} ml={index > 0 ? -3 : 0}>
                  <Avatar 
                    size="sm" 
                    source={{ uri: player.avatar }}
                    borderWidth={2}
                    borderColor="white"
                  />
                </Box>
              ))}
            </HStack>
            
            <Text fontSize="lg" fontWeight="bold" mx={3}>vs</Text>
            
            <HStack>
              {matchDetails.opponents.map((player, index) => (
                <Box key={player.id} ml={index > 0 ? -3 : 0}>
                  <Avatar 
                    size="sm" 
                    source={{ uri: player.avatar }}
                    borderWidth={2}
                    borderColor="white"
                  />
                </Box>
              ))}
            </HStack>
          </HStack>
          
          {/* Equipment */}
          <HStack space={2} mb={2} alignItems="flex-start">
            <Icon as={MaterialCommunityIcons} name="tennis-ball" size="sm" color="gray.500" mt={1} />
            <Text fontSize="sm" color="gray.700">
              {matchDetails.equipment}
            </Text>
          </HStack>
          
          {/* Payment */}
          <HStack space={2} mb={4} alignItems="flex-start">
            <Icon as={FontAwesome5} name="euro-sign" size="sm" color="gray.500" mt={1} />
            <VStack space={0}>
              <Text fontSize="sm" color="gray.700">
                {matchDetails.paymentMethod}
              </Text>
              <Text fontSize="sm" color="gray.700">
                {matchDetails.paymentStatus}
              </Text>
            </VStack>
          </HStack>
          
          {/* Match Sheet Button */}
          <Button 
            colorScheme="purple" 
            borderRadius="md" 
            size="lg"
            onPress={handleMatchSheetPress}
            mb={2}
          >
            {t('shared.screens.matchDetails.matchSheet')}
          </Button>
          
          {/* Additional Info */}
          <VStack space={2} mt={2}>
            <Text fontSize="sm" fontWeight="medium" textAlign="center">
              {t('shared.screens.matchDetails.paymentReceipt')}
            </Text>
            <Divider />
            <Text fontSize="sm" fontWeight="medium" textAlign="center">
              {t('shared.screens.matchDetails.additionalPurchase')}
            </Text>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
