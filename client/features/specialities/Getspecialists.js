import axios from '../../components/axioscreate';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Getspecialists = ({ route, navigation }) => {
  const { specialityReady } = route.params;
  const [expanded, setExpanded] = useState('');
  const [speciality, setSpeciality] = useState(specialityReady);
  const [data, setData] = useState([]);
  const Specialities = [
    'Dentists',
    'General Doctor',
    'Gynecologists',
    'Pediatricians',
    'Skin Doctors',
    'Ophthalmologist',
  ];

  const fetchAllData = async () => {
    let url = '/api/v1/specialists';
    if (specialityReady) {
      console.log(specialityReady);
      url = `/api/v1/specialists?speciality=${specialityReady}`;
    }
    const response = await axios.get(url);
    if (!response.data) {
      return setData([]);
    }
    setData(response.data);
  };
  useEffect(() => {
    fetchAllData();
  }, [speciality]);

  return (
    <View style={{marginTop: 80}}>

      {data.length ? (
        data.map((e, i) => {
          return (
            <View key={i}>
              <View style={{ width: 90, height: 100 }}><Image
                style={{ width: "70%", height: "100%" }}
                source={{ uri: e.image }}
              /></View>
              <Text>{e.name}</Text>
              <Text>{e.specialty}</Text>
            </View>
          );
        })
      ) : (
        <Text>There is no doctors 7tmuuuuut  </Text>
      )}
    </View>
  );
};
