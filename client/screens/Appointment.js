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

const Appointment = ({ navigation, route }) => {
  const [appointments, setAppointments] = useState([
      {
        "date": "2021-10-13",
        "time": "2:05 PM",
        "center_name": "Schiller Group",
        "clinic_location": "Jandir",
        "name": "Karim Riggoll"
    },
    {
        "date": "2021-06-25",
        "time": "7:13 AM",
        "center_name": "Satterfield, Hoeger and Schuppe",
        "clinic_location": "Malabago",
        "name": "Felicia Grewer"
    },
    {
        "date": "2021-10-13",
        "time": "2:05 PM",
        "center_name": "Schiller Group",
        "clinic_location": "Jandir",
        "name": "Karim Riggoll"
    },
    {
        "date": "2021-06-25",
        "time": "7:13 AM",
        "center_name": "Satterfield, Hoeger and Schuppe",
        "clinic_location": "Malabago",
        "name": "Felicia Grewer"
    }
  ]);
  const getDateName = (date)=>{
    let day = new Date(date).getDay();
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
  }
  console.log(getDateName("2021-12-10"));
  
  const getAllAppointment = async () => {
    // try {
    //   const { data } = await axioscreate.get(`/api/v1/appointments/1`);
    //   setAppointments(data);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error,"errror");
    // }
  };

  useEffect(() => {
    // getAllAppointment();
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.details}>
            <Text style={styles.detailsFont}>Details</Text>
          </View>
          {appointments.map((appointment) => (
            <View style={styles.listContainer}>
              <ListAppointments
                key={appointment.id}
                date={appointment.date}
                time={appointment.time}
                details={appointment.details}
              />
            </View>
          ))}
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
