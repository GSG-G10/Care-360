import React from 'react';
import { Button,StatusBar, Platform, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Home </Text>
      <Text>Home </Text>
      <Text>Home </Text>
      <Text>Home </Text>
      <Text>Home </Text>
      <Text>Home </Text>
      <Text>Home </Text>
      <Button
       title='Go to Profile' 
       onPress={()=>navigation.navigate('Profile')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#678541',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
