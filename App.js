import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
   
    <Provider store={store}>
       <AppNavigator />
    </Provider>
    
  );
}
