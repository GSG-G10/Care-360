import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landingpage } from './Features/landing/Landingpage';
import Book from './screens/Book';
import { Getspecialists } from './Features/specialities/Getspecialists';
import Dashboard from './screens/Dashboard';
import SpecialistCard from './Features/Specialists/Screen/Specialist-view';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
<<<<<<< HEAD
import Navbar from "./components/Navbar"
import Appointment from './screens/Appointment';
=======
import Navbar from "./components/Navbar";
import Specialist from './screens/Specialist';
>>>>>>> 225a1561de61f3831878d16a7d0476662ad1616b
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Appointment"
      >
        <Stack.Screen name="Landingpage" component={Landingpage} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="SpecialistCard" component={SpecialistCard} />
        <Stack.Screen name="Getspecialists" component={Getspecialists} />
        <Stack.Screen name="Navbar" component={Navbar} />
<<<<<<< HEAD
        <Stack.Screen name="Appointment" component={Appointment} />
=======
        <Stack.Screen name='Specialist' component={Specialist} /> 
>>>>>>> 225a1561de61f3831878d16a7d0476662ad1616b
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
