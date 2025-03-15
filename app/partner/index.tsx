import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet } from 'react-native';
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
  Divider,
  Modal,
  Center,
  CheckIcon,
  FormControl,
  Button
} from 'native-base';
import { useTranslation } from 'react-i18next';
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Type definitions
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

type FilterItem = {
  id: string;
  label: string;
};

type FilterCategory = 'level' | 'matchType' | 'location' | 'availability' | 'ageRange';

export default function PartnerSearchScreen() {
  // Create a StyleSheet for better performance
  const styles = StyleSheet.create({
    partnerCard: {
      marginBottom: 16,
    },
  });
  const { t } = useTranslation();
  const router = useRouter();
  
  // Filter modal state
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  // Filter states
  const [selectedLevels, setSelectedLevels] = useState(['beginner']);
  const [selectedMatchTypes, setSelectedMatchTypes] = useState(['training']);
  const [selectedLocations, setSelectedLocations] = useState(['lille']);
  const [selectedAvailabilities, setSelectedAvailabilities] = useState(['evening', 'weekend']);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState(['26-35']);
  
  // Active filters
  const [activeFilters, setActiveFilters] = useState<FilterItem[]>([
    { id: 'beginner', label: t('shared.screens.partnerSearch.filters.beginner') },
    { id: 'training', label: t('shared.screens.partnerSearch.filters.training') },
    { id: 'lille', label: t('shared.screens.partnerSearch.filters.lille') },
    { id: '26-35', label: t('shared.screens.partnerSearch.filters.ageRange2635') },
  ]);
  
  // Mock data for partners - using useMemo to optimize rendering
  const partners = useMemo<Partner[]>(() => [
    {
      id: '1',
      name: 'Grégoire Hermé',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      level: t('shared.screens.partnerSearch.levelBeginner'),
      levelScore: 2.5,
      availability: {
        days: t('shared.screens.partnerSearch.weekend'),
        time: t('shared.screens.partnerSearch.evening'),
      },
      location: t('shared.screens.partnerSearch.filters.lille'),
    },
    {
      id: '2',
      name: 'Madeleine Roos',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      level: t('shared.screens.partnerSearch.levelBeginner'),
      levelScore: 3.3,
      availability: {
        days: t('shared.screens.partnerSearch.weekend'),
        time: t('shared.screens.partnerSearch.daytime'),
      },
      location: t('shared.screens.partnerSearch.filters.lille'),
      distance: t('shared.screens.partnerSearch.radius20km'),
    },
    {
      id: '3',
      name: 'Paul Petit',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      level: t('shared.screens.partnerSearch.levelBeginnerPlus'),
      levelScore: 3.4,
      availability: {
        days: t('shared.screens.partnerSearch.weekend'),
        time: t('shared.screens.partnerSearch.evening'),
      },
      location: t('shared.screens.partnerSearch.filters.lille'),
    },
  ], [t]);

  const handleBackPress = useCallback(() => {
    router.back();
  }, [router]);

  const handleFilterRemove = useCallback((filterId: string) => {
    setActiveFilters(prev => prev.filter(filter => filter.id !== filterId));
    
    // Update corresponding filter state
    if (filterId === 'beginner' || filterId === 'intermediate' || filterId === 'advanced' || filterId === 'legend') {
      setSelectedLevels(prev => prev.filter(level => level !== filterId));
    } else if (filterId === 'friendly' || filterId === 'training' || filterId === 'tournament' || filterId === 'competition') {
      setSelectedMatchTypes(prev => prev.filter(type => type !== filterId));
    } else if (filterId === 'lille' || filterId === '20km' || filterId === '30km') {
      setSelectedLocations(prev => prev.filter(location => location !== filterId));
    } else if (filterId === 'anytime' || filterId === 'daytime' || filterId === 'evening' || filterId === 'weekend') {
      setSelectedAvailabilities(prev => prev.filter(availability => availability !== filterId));
    } else if (filterId === '18-25' || filterId === '26-35' || filterId === '36-45' || filterId === '45plus') {
      setSelectedAgeRanges(prev => prev.filter(age => age !== filterId));
    }
  }, []);

  const handleInvitePress = useCallback((partnerId: string) => {
    console.log('Invite partner:', partnerId);
    // Handle invite logic
  }, []);

  const handleChatPress = useCallback((partnerId: string) => {
    console.log('Chat with partner:', partnerId);
    // Handle chat logic
  }, []);
  
  const handleFilterPress = useCallback(() => {
    setShowFilterModal(true);
  }, []);
  
  const handleCloseFilterModal = useCallback(() => {
    setShowFilterModal(false);
  }, []);
  
  const toggleFilterItem = useCallback((item: string, category: FilterCategory) => {
    switch (category) {
      case 'level':
        setSelectedLevels(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        break;
      case 'matchType':
        setSelectedMatchTypes(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        break;
      case 'location':
        setSelectedLocations(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        break;
      case 'availability':
        setSelectedAvailabilities(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        break;
      case 'ageRange':
        setSelectedAgeRanges(prev => 
          prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
        break;
    }
  }, []);
  
  const getLevelLabel = useCallback((level: string): string => {
    switch (level) {
      case 'beginner': return t('shared.screens.partnerSearch.filters.beginner');
      case 'intermediate': return t('shared.screens.partnerSearch.filters.intermediate');
      case 'advanced': return t('shared.screens.partnerSearch.filters.advanced');
      case 'legend': return t('shared.screens.partnerSearch.filters.legend');
      default: return '';
    }
  }, [t]);

  const getMatchTypeLabel = useCallback((type: string): string => {
    switch (type) {
      case 'friendly': return t('shared.screens.partnerSearch.filters.friendly');
      case 'training': return t('shared.screens.partnerSearch.filters.training');
      case 'tournament': return t('shared.screens.partnerSearch.filters.tournament');
      case 'competition': return t('shared.screens.partnerSearch.filters.competition');
      default: return '';
    }
  }, [t]);

  const getLocationLabel = useCallback((location: string): string => {
    switch (location) {
      case 'lille': return t('shared.screens.partnerSearch.filters.lille');
      case '20km': return t('shared.screens.partnerSearch.filters.radius20km');
      case '30km': return t('shared.screens.partnerSearch.filters.radius30km');
      default: return '';
    }
  }, [t]);

  const getAvailabilityLabel = useCallback((availability: string): string => {
    switch (availability) {
      case 'anytime': return t('shared.screens.partnerSearch.filters.anytime');
      case 'daytime': return t('shared.screens.partnerSearch.filters.daytime');
      case 'evening': return t('shared.screens.partnerSearch.filters.evening');
      case 'weekend': return t('shared.screens.partnerSearch.filters.weekend');
      default: return '';
    }
  }, [t]);

  const getAgeRangeLabel = useCallback((age: string): string => {
    switch (age) {
      case '18-25': return t('shared.screens.partnerSearch.filters.ageRange1825');
      case '26-35': return t('shared.screens.partnerSearch.filters.ageRange2635');
      case '36-45': return t('shared.screens.partnerSearch.filters.ageRange3645');
      case '45plus': return t('shared.screens.partnerSearch.filters.ageRange45plus');
      default: return '';
    }
  }, [t]);

  const applyFilters = useCallback(() => {
    // Create new active filters based on selections
    const newFilters: FilterItem[] = [];
    
    // Add level filters
    selectedLevels.forEach(level => {
      newFilters.push({ id: level, label: getLevelLabel(level) });
    });
    
    // Add match type filters
    selectedMatchTypes.forEach(type => {
      newFilters.push({ id: type, label: getMatchTypeLabel(type) });
    });
    
    // Add location filters
    selectedLocations.forEach(location => {
      newFilters.push({ id: location, label: getLocationLabel(location) });
    });
    
    // Add availability filters
    selectedAvailabilities.forEach(availability => {
      newFilters.push({ id: availability, label: getAvailabilityLabel(availability) });
    });
    
    // Add age range filters
    selectedAgeRanges.forEach(age => {
      newFilters.push({ id: age, label: getAgeRangeLabel(age) });
    });
    
    setActiveFilters(newFilters);
    setShowFilterModal(false);
  }, [selectedLevels, selectedMatchTypes, selectedLocations, selectedAvailabilities, selectedAgeRanges, getLevelLabel, getMatchTypeLabel, getLocationLabel, getAvailabilityLabel, getAgeRangeLabel]);

  // Memoize the filter badge rendering for better performance
  const renderFilterBadges = useMemo(() => {
    return (
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
    );
  }, [activeFilters, handleFilterRemove]);

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
            onPress={handleFilterPress}
          >
            <Icon as={Ionicons} name="options-outline" size="sm" color="white" />
          </Pressable>
        </InputGroup>
        
        {/* Active Filters */}
        {renderFilterBadges}
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
              style={styles.partnerCard}
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
      
      {/* Filter Modal */}
      <Modal isOpen={showFilterModal} onClose={handleCloseFilterModal} size="full">
        <Modal.Content maxH="100%" marginTop={0} marginBottom={0} h="100%">
          <Modal.Header>
            <HStack justifyContent="space-between" alignItems="center" w="full">
              <Heading size="md">{t('shared.screens.partnerSearch.filters.title')}</Heading>
              <Pressable onPress={handleCloseFilterModal}>
                <Icon as={Ionicons} name="close" size="md" color="black" />
              </Pressable>
            </HStack>
          </Modal.Header>
          <Modal.Body>
            <ScrollView showsVerticalScrollIndicator={false}>
              <VStack space={6}>
                {/* Game Level */}
                <VStack space={2}>
                  <Text fontSize="sm" color="gray.500">{t('shared.screens.partnerSearch.filters.levelTitle')}</Text>
                  <HStack flexWrap="wrap" space={2}>
                    <Pressable onPress={() => toggleFilterItem('beginner', 'level')}>
                      <Badge 
                        bg={selectedLevels.includes('beginner') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLevels.includes('beginner') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.beginner')}</Text>
                          {selectedLevels.includes('beginner') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('intermediate', 'level')}>
                      <Badge 
                        bg={selectedLevels.includes('intermediate') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLevels.includes('intermediate') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.intermediate')}</Text>
                          {selectedLevels.includes('intermediate') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('advanced', 'level')}>
                      <Badge 
                        bg={selectedLevels.includes('advanced') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLevels.includes('advanced') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.advanced')}</Text>
                          {selectedLevels.includes('advanced') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('legend', 'level')}>
                      <Badge 
                        bg={selectedLevels.includes('legend') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLevels.includes('legend') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.legend')}</Text>
                          {selectedLevels.includes('legend') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                  </HStack>
                </VStack>
                
                <Divider />
                
                {/* Match Type */}
                <VStack space={2}>
                  <Text fontSize="sm" color="gray.500">{t('shared.screens.partnerSearch.filters.matchTypeTitle')}</Text>
                  <HStack flexWrap="wrap" space={2}>
                    <Pressable onPress={() => toggleFilterItem('friendly', 'matchType')}>
                      <Badge 
                        bg={selectedMatchTypes.includes('friendly') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedMatchTypes.includes('friendly') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.friendly')}</Text>
                          {selectedMatchTypes.includes('friendly') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('training', 'matchType')}>
                      <Badge 
                        bg={selectedMatchTypes.includes('training') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedMatchTypes.includes('training') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.training')}</Text>
                          {selectedMatchTypes.includes('training') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('tournament', 'matchType')}>
                      <Badge 
                        bg={selectedMatchTypes.includes('tournament') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedMatchTypes.includes('tournament') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.tournament')}</Text>
                          {selectedMatchTypes.includes('tournament') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('competition', 'matchType')}>
                      <Badge 
                        bg={selectedMatchTypes.includes('competition') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedMatchTypes.includes('competition') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.competition')}</Text>
                          {selectedMatchTypes.includes('competition') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                  </HStack>
                </VStack>
                
                <Divider />
                
                {/* Location */}
                <VStack space={2}>
                  <Text fontSize="sm" color="gray.500">{t('shared.screens.partnerSearch.filters.locationTitle')}</Text>
                  <FormControl>
                    <Input 
                      placeholder={t('shared.screens.partnerSearch.filters.searchCityPlaceholder')}
                      borderRadius="md"
                      bg="gray.100"
                      py={2}
                      px={4}
                      fontSize="sm"
                      InputLeftElement={<Icon as={Ionicons} name="search" size="sm" color="gray.400" ml={2} />}
                      mb={2}
                    />
                  </FormControl>
                  <HStack flexWrap="wrap" space={2}>
                    <Pressable onPress={() => toggleFilterItem('lille', 'location')}>
                      <Badge 
                        bg={selectedLocations.includes('lille') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLocations.includes('lille') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.lille')}</Text>
                          {selectedLocations.includes('lille') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('20km', 'location')}>
                      <Badge 
                        bg={selectedLocations.includes('20km') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLocations.includes('20km') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.radius20km')}</Text>
                          {selectedLocations.includes('20km') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('30km', 'location')}>
                      <Badge 
                        bg={selectedLocations.includes('30km') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedLocations.includes('30km') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.radius30km')}</Text>
                          {selectedLocations.includes('30km') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                  </HStack>
                </VStack>
                
                <Divider />
                
                {/* Availability */}
                <VStack space={2}>
                  <Text fontSize="sm" color="gray.500">{t('shared.screens.partnerSearch.filters.availabilityTitle')}</Text>
                  <HStack flexWrap="wrap" space={2}>
                    <Pressable onPress={() => toggleFilterItem('anytime', 'availability')}>
                      <Badge 
                        bg={selectedAvailabilities.includes('anytime') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAvailabilities.includes('anytime') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.anytime')}</Text>
                          {selectedAvailabilities.includes('anytime') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('daytime', 'availability')}>
                      <Badge 
                        bg={selectedAvailabilities.includes('daytime') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAvailabilities.includes('daytime') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.daytime')}</Text>
                          {selectedAvailabilities.includes('daytime') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('evening', 'availability')}>
                      <Badge 
                        bg={selectedAvailabilities.includes('evening') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAvailabilities.includes('evening') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.evening')}</Text>
                          {selectedAvailabilities.includes('evening') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('weekend', 'availability')}>
                      <Badge 
                        bg={selectedAvailabilities.includes('weekend') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAvailabilities.includes('weekend') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.weekend')}</Text>
                          {selectedAvailabilities.includes('weekend') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                  </HStack>
                </VStack>
                
                <Divider />
                
                {/* Age Range */}
                <VStack space={2}>
                  <Text fontSize="sm" color="gray.500">{t('shared.screens.partnerSearch.filters.ageRangeTitle')}</Text>
                  <HStack flexWrap="wrap" space={2}>
                    <Pressable onPress={() => toggleFilterItem('18-25', 'ageRange')}>
                      <Badge 
                        bg={selectedAgeRanges.includes('18-25') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAgeRanges.includes('18-25') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.ageRange1825')}</Text>
                          {selectedAgeRanges.includes('18-25') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('26-35', 'ageRange')}>
                      <Badge 
                        bg={selectedAgeRanges.includes('26-35') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAgeRanges.includes('26-35') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.ageRange2635')}</Text>
                          {selectedAgeRanges.includes('26-35') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('36-45', 'ageRange')}>
                      <Badge 
                        bg={selectedAgeRanges.includes('36-45') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAgeRanges.includes('36-45') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.ageRange3645')}</Text>
                          {selectedAgeRanges.includes('36-45') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => toggleFilterItem('45plus', 'ageRange')}>
                      <Badge 
                        bg={selectedAgeRanges.includes('45plus') ? "blue.100" : "gray.100"} 
                        borderRadius="md"
                        px={3} py={1}
                        _text={{ color: selectedAgeRanges.includes('45plus') ? "blue.600" : "gray.600" }}
                      >
                        <HStack space={1} alignItems="center">
                          <Text>{t('shared.screens.partnerSearch.filters.ageRange45plus')}</Text>
                          {selectedAgeRanges.includes('45plus') && (
                            <Icon as={Ionicons} name="checkmark" size="xs" color="blue.600" />
                          )}
                        </HStack>
                      </Badge>
                    </Pressable>
                  </HStack>
                </VStack>
              </VStack>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={handleCloseFilterModal}>
                {t('shared.screens.partnerSearch.filters.cancel')}
              </Button>
              <Button onPress={applyFilters}>
                {t('shared.screens.partnerSearch.filters.apply')}
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
}
