import * as React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

const ListAppointments = ({ appointment }) => {
  const { name, clinic_location, center_name } = appointment;

  return (
    <View style={{ marginTop: 10 }}>
      <List.Item
        title={`Specialist name:  ${name}`}
        left={(props) => <List.Icon {...props} icon="circle-medium" />}
      />
      <List.Item
        title={`Clinic name:  ${center_name}`}
        left={(props) => <List.Icon {...props} icon="circle-medium" />}
      />
      <List.Item
        title={`Clinic location:  ${clinic_location}`}
        left={(props) => <List.Icon {...props} icon="circle-medium" />}
      />
    </View>
  );
};

export default ListAppointments;
