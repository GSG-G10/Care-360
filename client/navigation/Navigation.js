import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Landingpage} from '../features/landing/Landingpage';
import Book from '../screens/Book';
import {Getspecialists} from '../features/specialities/Getspecialists';
import Dashboard from '../screens/Dashboard';
import SpecialistCard from '../features/Specialists/Screen/Specialist-view';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{   headerShown: false,}}
        initialRouteName='Landingpage'
      >
        <Stack.Screen name='Landingpage' component={Landingpage} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='Book' component={Book} />
        <Stack.Screen name='SpecialistCard' component={SpecialistCard} /> 
        <Stack.Screen name='Getspecialists' component={Getspecialists} /> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack
