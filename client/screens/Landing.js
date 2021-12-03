import React from 'react';
import { Button, Platform, StatusBar,StyleSheet, Text, TextInput, View } from 'react-native';

export default function Landing({navigation}) {
  console.log( StatusBar.currentHeight);
  return (
    <View style={styles.container}>
      <Text> landing 0</Text>
      <Text> landing 1</Text>
      <Text> landing 2</Text>
      <Text> landing 3</Text>
      <Text> landing 4</Text>
      <Text> landing </Text>
      <Text> landing </Text>
      <TextInput placeholder='title' />
      <Button
       title='Go to Home' 
       onPress={()=>navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
