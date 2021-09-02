import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './components/AppDrawer/AppDrawer';


export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}
