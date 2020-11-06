import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TouchScreen from './screens/TouchScreen';
import PinScreen from './screens/PinScreen';

export default function App() {
  const AppStack = createStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
