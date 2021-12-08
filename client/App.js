import React from 'react';
import { StyleSheet,
  StatusBar
,Platform,
} from 'react-native';
import Navbar from './components/Navbar';
import Book from './screens/Book';
import Navigation from './navigation/Navigation';
import SpecialistCard from './Features/Specialists/Screen/Specialist-view';
import { NativeRouter, Route, Link } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landingpage } from './features/landing/Landingpage';
import Book from './screens/Book';
import { Getspecialists } from './features/specialities/Getspecialists';
import Dashboard from './screens/Dashboard';
import SpecialistCard from './features/Specialists/Screen/Specialist-view';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <NativeRouter>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landingpage"
      >
        <Stack.Screen name="Landingpage" component={Landingpage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="SpecialistCard" component={SpecialistCard} />
        <Stack.Screen name="Getspecialists" component={Getspecialists} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeRouter>
  );
}

export default RootStack;
