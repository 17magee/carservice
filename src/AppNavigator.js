import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function AppNavigator() {
  return (
    
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    
  );
}
