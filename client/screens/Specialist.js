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
import { List } from 'react-native-paper';

const Specialist = ({ navigation, route }) => {
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
      <Header navigation={navigation} />
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
        {
          <View style={styles.bowlAllsLines}>
            <List.AccordionGroup>
              <List.Accordion
                title="Education"
                titleStyle={{
                  fontWeight: 'bold',
                  color: '#022752',
                  fontSize: 18,
                }}
                id="1"
                style={styles.listContainer2}
                left={(props) => <List.Icon {...props} icon="school-outline" />}
              >
                <ListDoctors details={specialist.education} />
              </List.Accordion>
              <List.Accordion
                title="Experience"
                titleStyle={{
                  fontWeight: 'bold',
                  color: '#022752',
                  fontSize: 18,
                }}
                id="2"
                style={styles.listContainer2}
                left={(props) => (
                  <List.Icon {...props} icon="text-box-check-outline" />
                )}
              >
                <ListDoctors details={specialist.experience} />
              </List.Accordion>
              <List.Accordion
                title="Treatments"
                id="3"
                style={styles.listContainer2}
                titleStyle={{
                  fontWeight: 'bold',
                  color: '#022752',
                  fontSize: 18,
                }}
                left={(props) => (
                  <List.Icon {...props} icon="file-edit-outline" />
                )}
              >
                <ListDoctors details={specialist.treatments} />
              </List.Accordion>
            </List.AccordionGroup>
          </View>
        }
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

  bowlTitles: {
    backgroundColor: '#eee',
    marginTop: 10,
  },

  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },

  bowlAllsLines: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer2: {
    backgroundColor: '#DCE4E8',
    width: 350,
    height: 55,
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },
});

export default Specialist;
