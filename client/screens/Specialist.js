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
import ListDoctors from '../components/List';

const Specialist = ({navigation,route}) => {
  const [specialist, setSpecialistInformations] = useState([]);
  const { doctorId } = route.params;

  const getSpecialist = async () => {
    try {
      const { data } = await axioscreate.get(`/api/v1/doctor/${doctorId}`);
      setSpecialistInformations(data);
    } catch {}
  };

  useEffect(() => {
    getSpecialist();
  }, []);

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Avatar.Image size={100} source={{ uri: specialist.image }} />
            <View style={styles.specialistInfo}>
              <Text style={styles.DoctorName}>{specialist.name}</Text>
              <Text style={styles.locationInfo}>{specialist.specialty}</Text>
              <Text style={styles.locationInfo}>{specialist.center_name}</Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Button
                style={styles.buttons}
                icon="phone"
                mode="outlined"
                color="#022752"
                onPress={() =>
                  navigation.navigate('Specialist', { specialityReady: '' })
                }
              >
                <Text style={styles.buttonsFont}>
                  {' '}
                  {specialist.phone_number}
                </Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                style={styles.buttons}
                icon="calendar"
                mode="contained"
                color="#FFB803"
                onPress={() =>
                  navigation.navigate('Book', { idUser: specialist.id })
                }
              >
                <Text style={styles.buttonsFont}>Book Now</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsFont}>Details</Text>
        </View>
        <View style={styles.listContainer}>
          <ListDoctors
            title="Education"
            icon="school-outline"
            details={specialist.education}
          />
        </View>
        <View style={styles.listContainer}>
          <ListDoctors
            title="Experience"
            icon="text-box-check-outline"
            details={specialist.experience}
          />
        </View>
        <View style={styles.listContainer}>
          <ListDoctors
            title="Treatments"
            icon="file-edit-outline"
            details={specialist.treatments}
          />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  specialistInfo: {
    width: '65%',
    padding: 10,
    marginLeft: 18,
  },
  locationInfo: {
    color: '#5A5A5A',
    fontWeight: '200',
    marginTop: 6,
  },
  DoctorName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#022752',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    height: 100,
    alignItems: 'center',
  },
  buttons: {
    height: 35,
    width: '100%',
  },
  buttonsFont: {
    fontWeight: '700',
    fontSize: 12,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,

    elevation: 1,
  },
  details: {
    width: '30%',
    alignItems: 'center',
  },
  detailsFont: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#022752',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
});

export default Specialist;
