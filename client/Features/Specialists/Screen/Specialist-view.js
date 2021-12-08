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
import { Search } from '../../../components/ui';
const SpecialistCard = () => {
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';

const SpecialistCard = ({route, navigation}) => {
  const { specialityReady } = route.params;
  const [specialists, setSpecialists] = useState([]);
  const [errorMessage, setErrorMessage] = useState('There is no events with this filter');

  const getSpecialists = async () => {
    try {
      let url = '/api/v1/specialists';
      if (specialityReady) {
        url = `/api/v1/specialists?speciality=${specialityReady}`;
      }
      const { data } = await axioscreate.get(url);
      setSpecialists( specialityReady ? data.data : data);
    } catch {
      // setErrorMessage(err.status);
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

  loading:{
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      fontSize: 30,
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
