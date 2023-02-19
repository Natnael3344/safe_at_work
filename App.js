import 'react-native-gesture-handler';
import SplashScreenn from "./src/screens/SplashScreenn";
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import WelcomeScreen from "./src/screens/WelcomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from "./src/navigator/AppNavigator";
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <NavigationContainer>
     <AppNavigator/>
    </NavigationContainer>
  );
}
