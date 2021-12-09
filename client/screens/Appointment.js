import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axioscreate from '../components/axioscreate';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ListAppointments } from '../components/ui';
import { List } from 'react-native-paper';

const Appointment = ({ navigation, route }) => {
  const [appointments, setAppointments] = useState([]);

  const getAllAppointment = async () => {
    const { data } = await axioscreate.get(`/api/v1/appointments/1`);
    setAppointments(data);
  };

  useEffect(() => {
    getAllAppointment();
  }, []);

  return (
    <>
      <Header navigation={navigation}/>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.detailsUSER}>
            <Text style={styles.TITLEnameUser}> Kader Kaplan Mutluer</Text>
          </View>
          <Text style={styles.detailsFont}>Booked appointments</Text>
          <View style={styles.bowlMain}>
            <List.AccordionGroup>
              {appointments.map((appointment, index) => (
                <View style={styles.bowlSheet}  key={index + 1}>
                  <List.Accordion
                    title={`${appointment.date} - ${appointment.time}`}
                    titleStyle={{
                      fontWeight: 'bold',
                      color: '#022752',
                      fontSize: 18,
                    }}
                   
                    id={index + 1}
                    style={{
                      backgroundColor: '#FFE49F',
                      marginTop: 10,
                      width: '100%',
                    }}
                    left={(props) => (
                      <List.Icon {...props} icon="calendar-range" />
                    )}
                  >
                    <ListAppointments appointment={appointment} />
                  </List.Accordion>
                </View>
              ))}
            </List.AccordionGroup>
          </View>
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

  bowlMain: {
    alignItems: 'center',
  },

  bowlSheet: {
    width: '90%',
  },

  detailsUSER: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TITLEnameUser: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#022752',
  },
  detailsFont: {
    marginTop: 20,
    fontSize: 17,
    padding: 5,
    marginLeft: '4%',
    fontWeight: 'bold',
    color: '#022752',
  },
});

export default Appointment;
