import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/screens/Home';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
