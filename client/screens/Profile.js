import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Button
       title='Go to Book' 
       onPress={()=>navigation.navigate('Book')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#678',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
