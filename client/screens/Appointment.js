import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import axioscreate from '../components/axioscreate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {ListAppointments} from '../components/ui';
import { List } from 'react-native-paper';


const Appointment = ({ navigation, route }) => {
  const [appointments, setAppointments] = useState([]);
  
 
  const getAllAppointment = async () => {
      const { data } = await axioscreate.get(`/api/v1/appointments/1`);
      // setAppointments(data);
      console.log(data,"llllll");
  };

  useEffect(() => {
    getAllAppointment();
  }, []);


  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.details}>
            <Text style={styles.detailsFont}>Book </Text>
          </View>
          <List.AccordionGroup>
            {appointments.map((appointment,index) => (
              <List.Accordion
                title={`${getDateName(appointment.date)} - ${appointment.time}`}
                titleStyle={{
                  fontWeight: 'bold',
                  color: '#022752',
                  fontSize: 18,
                }}
                id={index+1}
                style={styles.listContainer2}
                left={(props) => (
                  <List.Icon {...props} icon="calendar-range" />
                )}
              >
                <ListAppointments appointment={appointment} />
              </List.Accordion>
            ))}
          </List.AccordionGroup>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#DCE4E8',
    width: 350,
    height: 55,
    justifyContent: 'center',
    borderRadius: 5,
  },
  details: {
    fontSize: 2,
  },
});


export default Appointment;
