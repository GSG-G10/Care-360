import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axioscreate from '../../components/axioscreate';

function TableUsers() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    let { data } = await axioscreate.get(`/api/v1/users`);
    setUsers(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <View>
      <ScrollView>
        {users.map((user, i) => {
          return (
            <View key={i} style={styles.card_lineUser}>
              <Text>{i + 1}</Text>
              <Text>{user.name}</Text>
              <Text>{user.identity_number}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TableUsers;

const styles = StyleSheet.create({
  card_lineUser: {
    backgroundColor: '#eee',
    marginTop: 5,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
