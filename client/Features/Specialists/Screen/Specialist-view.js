import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import axioscreate from '../../../components/axioscreate';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import SearchSpecialist from '../Components/Search-specialist';

const SpecialistCard = ({route, navigation}) => {
  const { specialityReady } = route.params;
  console.log(specialityReady);
  const [specialists, setSpecialists] = useState([]);
  const [errorMessage, setErrorMessage] = useState(
    'There is no events with this filter',
  );

  const getSpecialists = async () => {
    try {
      let url = '/api/v1/specialists';
      if (specialityReady) {
        console.log(specialityReady);
        url = `/api/v1/specialists?speciality=${specialityReady}`;
      }
      const { data } = await axioscreate.get(url);
      console.log('-----------');
      console.log(data.data);
      setSpecialists(data.data);
    } catch {
      setErrorMessage(err.status);
    }
  };

  useEffect(() => {
    getSpecialists();
  }, []);

  return (
    <>
    <Header />
    <ScrollView>
      <View style={styles.container}>
        <SearchSpecialist/>
        {specialists.length ? (
          specialists.map((specialist) => {
            return (
              <View style={styles.cardContainer} key={specialist.id}>
                <View style={styles.doctorContainer}>
                  <View style={styles.avatarContainer}>
                    <Avatar.Image
                      size={65}
                      source={{ uri: specialist.image }}
                    />
                  </View>
                  <View>
                    <Text style={styles.headerFont}>{specialist.name}</Text>
                    <Text style={styles.specialityFont}>
                      {specialist.specialty}
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity>
                    <Button
                      style={styles.buttons}
                      icon="account-outline"
                      mode="outlined"
                      color="#022752"
                    >
                      <Text style={styles.buttonsFont}> View Profile</Text>
                    </Button>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Button
                    style={styles.buttons}
                    icon="calendar"
                    mode="contained"
                    color="#FFB803"
                  onPress={()=> navigation.navigate('Book', {idUser: specialist.id})}
                  >
                    <Text style={styles.buttons}>Book Now</Text>
                  </Button>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        ) : (
          <Text>Hello</Text>
        )}
      </View>
    </ScrollView>
    <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
  },
  search: {
    width:'50%',
    backgroundColor:'green'

  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1,
    marginTop: 20,
    width: '90%',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,

    elevation: 1,
  },
  avatarContainer: {
    padding: 10,
  },
  doctorContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '57%',
  },
  buttonsContainer: {
    padding: 10,
    width: '50%',
  },
  buttons: {
    width: '80%',
    marginTop: 5,
    height: 30,
    fontSize: 10,
    fontWeight: 'bold',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1,

    elevation: 1,
  },
  headerFont: {
    fontWeight: 'bold',
    color: '#022752',
  },
  buttonsFont: {
    fontSize: 9,
    fontWeight: 'bold',
  },
  specialityFont: {
    fontSize: 10,
    fontWeight: '100',
  },
});

export default SpecialistCard;
