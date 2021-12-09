import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ListAppointments } from '../components/ui';
function Appointment({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.content}>
        <Text> Kader Kaplan Mutluer</Text>
       <View style={styles.bookAppointments}> 
        <Text>Book Appointments</Text>
        <ListAppointments />  
       </View>    
      <Footer navigation={navigation} />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {},
  bookAppointments: {}
});
export default Appointment;
