
import SplashScreenn from "./src/screens/SplashScreenn";
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import WelcomeScreen from "./src/screens/WelcomeScreen";
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <WelcomeScreen/>
  );
}
