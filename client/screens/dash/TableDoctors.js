import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import axioscreate from '../../components/axioscreate';

function TableUsers() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    let { data } = await axioscreate.get(`/api/v1/doctors`);
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
              <View
                style={{
                  width: '30%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text>{i + 1}</Text>
                <Image
                  source={{ uri: user.image }}
                  style={{ width: 40, height: 40, borderRadius: 50 }}
                />
              </View>
              <View
                style={{
                  width: '70%',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <Text>{user.name}</Text>
                <Text>{user.specialty}</Text>
              </View>
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
    justifyContent: 'space-between',
  },
});
