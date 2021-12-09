import * as React from 'react';
import { StyleSheet, View,Text } from 'react-native';

const ListAppointments = ({ appointment }) => {
  const { name, clinic_location, center_name } = appointment;
  

  return (
    <View style={{ marginTop: 10 }}>
      <View style={styles.content}>
        <Text style={styles.title}>Specialist name:</Text>
        <Text style={styles.contentText}>{name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Clinic name:</Text>
        <Text style={styles.contentText}>{center_name}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Clinic location:</Text>
        <Text style={styles.contentText}>{clinic_location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#ffc10794',
    width: 350,
    height: 55,
    justifyContent: 'center',
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentText:{},
  title:{}
});

export default ListAppointments;
