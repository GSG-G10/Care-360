import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ListAppointments({ navigation }) {
   const [appointments, setAppointments] = useState([]);
   const getAllAppointment = async () => {
     let { data } = await axioscreate.get(`/api/v1/appointments/{id}`);
     setAppointments(data);
     console.log(data);
   };

   useEffect(() => {
     getAllAppointment();
   }, []);

  return (
    <View style={styles.container} onPress={() => navigation.navigate(link)}>
    Hello
    </View>
  );
}
const styles = StyleSheet.create({
  
});

export default ListAppointments;
