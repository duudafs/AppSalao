import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomTab } from '@/components/custom-tab';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#aa0063',
         tabBarInactiveTintColor: '#999',
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
             tabBarIcon: ({ focused, color })  => <IconSymbol size={28} name={focused ? "house.fill" : "house"} color={'#aa0063'} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
             tabBarIcon: ({ focused, color })  => <IconSymbol size={28} name="paperplane" color={'#b1b1b1'} />,
         
        }}
      />
    </Tabs>
  );
}
