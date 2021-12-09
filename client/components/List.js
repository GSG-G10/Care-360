import * as React from 'react';
import { List } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const ListDoctors = ({ details }) => {
  const myArray = details ? details.split('.') : [];
  myArray.pop();
  return (
    <View>
      {myArray.map((item, i) => {
        return (
          <List.Item
            title={item}
            key={i}
            left={(props) => <List.Icon {...props} icon="circle-medium" />}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  points: {
    fontSize: 2,
  },
});

export default ListDoctors;
