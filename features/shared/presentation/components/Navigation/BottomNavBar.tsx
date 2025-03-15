import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Box, HStack, Pressable, Icon, Text, Center } from 'native-base';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

type NavItem = {
  name: string;
  route: string;
  icon: {
    active: React.ReactNode;
    inactive: React.ReactNode;
  };
};

export const BottomNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();

  const handleNavigation = useCallback((route: string) => {
    if (pathname !== route) {
      router.push(route);
    }
  }, [router, pathname]);

  const navItems: NavItem[] = [
    {
      name: t('shared.navigation.home'),
      route: '/',
      icon: {
        active: <Icon as={Ionicons} name="home" size="md" color="white" />,
        inactive: <Icon as={Ionicons} name="home-outline" size="md" color="white" />,
      },
    },
    {
      name: t('shared.navigation.reserve'),
      route: '/reserve',
      icon: {
        active: <Icon as={FontAwesome5} name="calendar-check" size="md" color="white" />,
        inactive: <Icon as={FontAwesome5} name="calendar" size="md" color="white" />,
      },
    },
    {
      name: t('shared.navigation.match'),
      route: '/match',
      icon: {
        active: <Icon as={MaterialIcons} name="sports-tennis" size="md" color="white" />,
        inactive: <Icon as={MaterialIcons} name="sports-tennis" size="md" color="white" opacity={0.7} />,
      },
    },
    {
      name: t('shared.navigation.messages'),
      route: '/messages',
      icon: {
        active: <Icon as={Ionicons} name="chatbubble" size="md" color="white" />,
        inactive: <Icon as={Ionicons} name="chatbubble-outline" size="md" color="white" />,
      },
    },
  ];

  return (
    <Box width="100%" position="absolute" bottom={0} left={0} right={0} safeAreaBottom>
      <HStack bg="primary.600" alignItems="center" safeAreaBottom shadow={6} style={styles.container}>
        {navItems.map((item) => {
          // Check if the current path matches the route or is a sub-route
          const isActive = pathname === item.route || 
            (item.route !== '/' && pathname.startsWith(item.route));
          return (
            <Pressable 
              key={item.name}
              opacity={isActive ? 1 : 0.7}
              py="3"
              flex={1}
              onPress={() => handleNavigation(item.route)}
            >
              <Center>
                {isActive ? item.icon.active : item.icon.inactive}
                <Text color="white" fontSize="xs" mt={1}>
                  {item.name}
                </Text>
              </Center>
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
});
