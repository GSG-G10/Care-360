import React from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import{ Header }from '../components/Header';
import{ Footer }from '../components/Footer';

export default function Landing({ navigation }) {
  console.log(StatusBar.currentHeight);
  return (
    <View>
      <Header />
      <Text> landing 0</Text>
      <Text> landing 1</Text>
      <Text> landing 2</Text>
      <Text> landing 3</Text>
      <Text> landing 4</Text>
      <Text> landing </Text>
      <Text> landing </Text>
      <TextInput placeholder="title" />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Footer />
    </View>
  );
}


