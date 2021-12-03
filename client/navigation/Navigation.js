import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screens/Landing';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Book from '../screens/Book';
import { View } from 'react-native';

const Stack = createNativeStackNavigator()

function RootStack() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{   headerShown: false,}}
        initialRouteName='Book'
      >
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Book' component={Book} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default RootStack
