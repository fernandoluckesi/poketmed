import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Queries } from '../screens/Queries';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonNew } from '../components/ButtonNew';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,

        tabBarStyle: {
          height: Platform.OS === 'ios' ? 85 : 62,
          paddingVertical: Platform.OS === 'ios' ? 10 : 10,
          paddingBottom: Platform.OS === 'android' ? 10 : getBottomSpace(),
        },
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Consultas"
        component={Queries}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Novo"
        component={Queries}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => <ButtonNew focused={focused} />,
        }}
      />
      <Screen
        name="Medicamentos"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pill" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Exames"
        component={Queries}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="file-text-o" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
