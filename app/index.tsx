import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { 
  Box, 
  VStack, 
  ScrollView, 
  Heading, 
  Text, 
  HStack, 
  Avatar, 
  Icon, 
  Pressable
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useThemeStore } from '@/features/shared/presentation/store/useThemeStore';
import { BottomNavBar } from '@/features/shared/presentation/components/Navigation/BottomNavBar';
import { MatchCard } from '@/features/shared/presentation/components/Cards/MatchCard';
import { ActionCard } from '@/features/shared/presentation/components/Cards/ActionCard';

export default function HomeScreen() {
  const { theme } = useThemeStore();
  const { t } = useTranslation();

  const handleMatchPress = useCallback(() => {
    // Handle match press
  }, []);

  const handleActionPress = useCallback(() => {
    // Handle action press
  }, []);

  const upcomingMatches = [
    {
      id: '1',
      title: 'Urban Padel',
      location: 'Les Halles',
      time: '9h00',
      date: '15 fév. 2025',
      players: [
        { id: 'p1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { id: 'p2', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { id: 'p3', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { id: 'p4', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
      ],
    },
    {
      id: '2',
      title: '4Padel',
      location: 'Boulogne',
      time: '18h30',
      date: '17 fév. 2025',
      players: [
        { id: 'p5', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { id: 'p6', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { id: 'p7', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { id: 'p8', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
      ],
    },
  ];

  return (
    <Box flex={1} bg="gray.50" safeAreaTop>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} pb={20}>
          {/* Header */}
          <Box px={4} pt={4} pb={2}>
            <HStack justifyContent="space-between" alignItems="center" mb={2}>
              <Avatar 
                size="md" 
                source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                borderColor="primary.600"
                borderWidth={2}
              />
              <HStack space={2}>
                <Icon as={Ionicons} name="grid-outline" size="md" color="primary.600" />
                <Icon as={Ionicons} name="notifications-outline" size="md" color="primary.600" />
              </HStack>
            </HStack>
            
            <HStack space={1} alignItems="baseline" mt={2}>
              <Icon as={Ionicons} name="sunny-outline" color="yellow.500" size="sm" />
              <Text fontSize="md" fontWeight="medium" color="gray.600">
                {t('shared.common.greeting', { name: 'Tom' })}
              </Text>
            </HStack>
            
            <Heading size="xl" color="gray.900" mt={1}>
              {t('shared.screens.home.upcomingMatches')}
            </Heading>
          </Box>
          
          {/* Upcoming Matches */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            px={4}
          >
            {upcomingMatches.map((match) => (
              <MatchCard 
                key={match.id}
                title={match.title}
                location={match.location}
                time={match.time}
                date={match.date}
                players={match.players}
                onPress={handleMatchPress}
              />
            ))}
          </ScrollView>
          
          {/* Action Cards */}
          <VStack px={4} space={2}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {t('shared.screens.home.readyForNextLevel')}
            </Text>
            <Heading size="md" color="gray.900" mb={2}>
              {t('shared.screens.home.playConnectProgress')}
            </Heading>
            
            <ActionCard 
              title={t('shared.screens.home.findPartner.title')}
              description={t('shared.screens.home.findPartner.description')}
              icon={<Icon as={Ionicons} name="people" size="md" color="primary.600" />}
              onPress={handleActionPress}
            />
            
            <ActionCard 
              title={t('shared.screens.home.findMatch.title')}
              description={t('shared.screens.home.findMatch.description')}
              icon={<Icon as={MaterialIcons} name="sports-tennis" size="md" color="primary.600" />}
              onPress={handleActionPress}
            />
            
            <ActionCard 
              title={t('shared.screens.home.favoriteClubs.title')}
              description={t('shared.screens.home.favoriteClubs.description')}
              icon={<Icon as={Ionicons} name="heart" size="md" color="primary.600" />}
              onPress={handleActionPress}
            />
            
            <ActionCard 
              title={t('shared.screens.home.friendsPartners.title')}
              description={t('shared.screens.home.friendsPartners.description')}
              icon={<Icon as={Ionicons} name="people-circle" size="md" color="primary.600" />}
              onPress={handleActionPress}
            />
          </VStack>
        </VStack>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <BottomNavBar />
    </Box>
  );
}
