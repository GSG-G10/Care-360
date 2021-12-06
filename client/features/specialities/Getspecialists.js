import axios from '../../components/axioscreate';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';

export const Getspecialists = ({ route, navigation }) => {
  const { speciality: special } = route.params;
  const [expanded, setExpanded] = useState('');
  const [speciality, setSpeciality] = useState(special);
  const [data, setData] = useState('');
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
    if (speciality) {
      url = `/api/v1/specialists?speciality=${speciality}`;
    }
    const response = await axios.get(url);
    if (!response.data) {
      return setData([]);
    }

    setData(response.data.data);
  };
  useEffect(() => {
    fetchAllData();
  }, [speciality]);

  console.log(data);
  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <ion-icon name="filter-outline"></ion-icon>
            <ListItem.Content>
              <ListItem.Title>Speciality</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        {Specialities.map((l, i) => (
          <ListItem
            key={i}
            onPress={() => {
              setExpanded(!expanded);
              setSpeciality(l);
            }}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title>{l}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
      {data.length ? (
        data.map((e, i) => {
          return (
            <View key={e.id}>
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
        <Text>There is no doctors rooo7 mmmmuuuut </Text>
      )}
    </View>
  );
};
