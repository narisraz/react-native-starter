import React, { useCallback, useState } from 'react';
import { 
  Box, 
  VStack, 
  HStack, 
  Text, 
  Heading, 
  Icon, 
  Input, 
  ScrollView,
  Pressable,
  Avatar,
  Badge,
  InputGroup,
  Divider
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Partner type definition
type Partner = {
  id: string;
  name: string;
  avatar: string;
  level: string;
  levelScore: number;
  availability: {
    days: string;
    time: string;
  };
  location: string;
  distance?: string;
};

export default function PartnerSearchScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  
  // Active filters
  const [activeFilters, setActiveFilters] = useState([
    { id: 'beginner', label: 'Débutant' },
    { id: 'training', label: 'Entrainement' },
    { id: 'location', label: 'Lille' },
    { id: 'age', label: '26-35 ans' },
  ]);
  
  // Mock data for partners
  const partners: Partner[] = [
    {
      id: '1',
      name: 'Grégoire Hermé',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      level: 'niv. débutant',
      levelScore: 2.5,
      availability: {
        days: 'week-end',
        time: 'soirée',
      },
      location: 'Lille',
    },
    {
      id: '2',
      name: 'Madeleine Roos',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      level: 'niv. débutant',
      levelScore: 3.3,
      availability: {
        days: 'week-end',
        time: 'journée',
      },
      location: 'Lille',
      distance: '20km autour',
    },
    {
      id: '3',
      name: 'Paul Petit',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      level: 'niv. débutant+',
      levelScore: 3.4,
      availability: {
        days: 'week-end',
        time: 'soirée',
      },
      location: 'Lille',
    },
  ];

  const handleBackPress = useCallback(() => {
    router.back();
  }, [router]);

  const handleFilterRemove = useCallback((filterId: string) => {
    setActiveFilters(prev => prev.filter(filter => filter.id !== filterId));
  }, []);

  const handleInvitePress = useCallback((partnerId: string) => {
    console.log('Invite partner:', partnerId);
    // Handle invite logic
  }, []);

  const handleChatPress = useCallback((partnerId: string) => {
    console.log('Chat with partner:', partnerId);
    // Handle chat logic
  }, []);

  return (
    <Box flex={1} bg="white" safeAreaTop>
      <StatusBar style="dark" />
      
      {/* Header */}
      <Box px={4} pt={2} pb={6}>
        <Pressable onPress={handleBackPress} hitSlop={8} mb={2}>
          <Icon as={Ionicons} name="arrow-back" size="md" color="gray.800" />
        </Pressable>
        
        <Heading size="lg" mt={2}>
          {t('shared.screens.partnerSearch.findIdealPartner')}
        </Heading>
        <Text fontSize="md" color="gray.600" mt={1}>
          {t('shared.screens.partnerSearch.findPerfectPlayer')}
        </Text>
      </Box>
      
      {/* Search Section */}
      <Box px={4} mb={4}>
        <Text fontSize="md" fontWeight="bold" mb={2}>
          {t('shared.screens.partnerSearch.refineSearch')}
        </Text>
        
        <InputGroup>
          <Input 
            InputLeftElement={
              <Icon as={Ionicons} name="search" size="sm" color="gray.400" ml={2} />
            }
            placeholder={t('shared.screens.partnerSearch.searchPlaceholder')}
            borderRadius="full"
            bg="gray.100"
            py={2}
            px={4}
            fontSize="sm"
          />
          <Pressable 
            position="absolute" 
            right={2} 
            top="15%" 
            bottom="15%" 
            justifyContent="center"
            bg="black"
            borderRadius="full"
            px={2}
          >
            <Icon as={Ionicons} name="options-outline" size="sm" color="white" />
          </Pressable>
        </InputGroup>
        
        {/* Active Filters */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          mt={3}
        >
          <HStack space={2}>
            {activeFilters.map(filter => (
              <Badge 
                key={filter.id}
                bg="gray.100" 
                borderRadius="full"
                py={1}
                px={3}
                _text={{ color: "gray.700", fontSize: "xs" }}
              >
                {filter.label}
                <Pressable onPress={() => handleFilterRemove(filter.id)} ml={1}>
                  <Icon as={Ionicons} name="close" size="xs" color="gray.500" />
                </Pressable>
              </Badge>
            ))}
          </HStack>
        </ScrollView>
      </Box>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} px={4} pb={20}>
          {partners.map(partner => (
            <Box 
              key={partner.id}
              bg="white" 
              borderRadius="lg" 
              shadow={1}
              borderWidth={1}
              borderColor="gray.100"
              p={4}
            >
              <HStack space={3} alignItems="center">
                <Avatar 
                  size="md" 
                  source={{ uri: partner.avatar }}
                />
                
                <VStack flex={1}>
                  <HStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="md" fontWeight="bold">
                      {partner.name}
                    </Text>
                    <HStack space={1} alignItems="center">
                      <Icon as={Ionicons} name="star" size="xs" color="yellow.500" />
                      <Text fontSize="sm" fontWeight="bold">{partner.levelScore}/5</Text>
                    </HStack>
                  </HStack>
                  
                  <HStack space={2} mt={1}>
                    <Badge 
                      bg="pink.100" 
                      _text={{ color: "pink.600", fontSize: "2xs" }}
                      borderRadius="sm"
                      px={1}
                    >
                      {partner.level}
                    </Badge>
                    
                    {partner.levelScore >= 3 && (
                      <Badge 
                        bg="orange.100" 
                        _text={{ color: "orange.600", fontSize: "2xs" }}
                        borderRadius="sm"
                        px={1}
                      >
                        {partner.levelScore}/5
                      </Badge>
                    )}
                  </HStack>
                </VStack>
              </HStack>
              
              <Divider my={3} />
              
              <HStack justifyContent="space-between">
                <VStack>
                  <Text fontSize="xs" color="gray.500">
                    {t('shared.screens.partnerSearch.availability')}
                  </Text>
                  <Text fontSize="sm">
                    {partner.availability.days} • {partner.availability.time}
                  </Text>
                </VStack>
                
                <VStack>
                  <Text fontSize="xs" color="gray.500">
                    {t('shared.screens.partnerSearch.location')}
                  </Text>
                  <Text fontSize="sm">
                    {partner.location}{partner.distance ? ` • ${partner.distance}` : ''}
                  </Text>
                </VStack>
              </HStack>
              
              <HStack space={2} mt={4}>
                <Pressable 
                  flex={1} 
                  bg="blue.100" 
                  borderRadius="md"
                  py={2}
                  alignItems="center"
                  onPress={() => handleInvitePress(partner.id)}
                >
                  <Text color="blue.600" fontSize="sm" fontWeight="medium">
                    {t('shared.screens.partnerSearch.inviteToPlay')}
                  </Text>
                </Pressable>
                
                <Pressable 
                  bg="gray.100" 
                  borderRadius="md"
                  p={2}
                  onPress={() => handleChatPress(partner.id)}
                >
                  <Icon as={Ionicons} name="chatbubble-outline" size="sm" color="gray.600" />
                </Pressable>
              </HStack>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
}
