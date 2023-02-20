import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Welcome from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DrawerScreen from './DrawerScreen';
import Complaint from '../screens/Complaint';
import AboutScreen from '../screens/AboutScreen';
import FaqScreen from '../screens/FaqScreen';
import TrackScreen from '../screens/TrackScreen';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
     <Stack.Screen
      name="welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="signin"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Language"
      component={LanguageScreen}
    />
    <Stack.Screen
      name="Forgot Password"
      component={ForgotPasswordScreen}
    />
    <Stack.Screen
      name="sign up"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
    name="Dashboard" 
    options={{
      headerShown:false 
    }} 
    component={DrawerScreen} />
    <Stack.Screen
      name="Complaint"
      component={Complaint}
      options={{ 
        title:'File a complaint',
            headerStyle: {
              backgroundColor: '#FF325F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="about"
      component={AboutScreen}
      options={{ 
        title:'About the Initiative',
            headerStyle: {
              backgroundColor: '#FF325F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="faq"
      component={FaqScreen}
      options={{ 
        title:'Frequently Asked Questions',
            headerStyle: {
              backgroundColor: '#FF325F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    <Stack.Screen
      name="track"
      component={TrackScreen}
      options={{ 
        title:'Track a complaint',
            headerStyle: {
              backgroundColor: '#FF325F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
       }}
    />
    </Stack.Navigator>
  )
}

export default AppNavigator