import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsScreen from './NewsScreen';
import FavoritesScreen from './FavoritesScreen'; // допустим у тебя есть экран избранного

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: 'tomato' },
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen name="Новости" component={NewsScreen} />
        <Tab.Screen name="Избранное" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
