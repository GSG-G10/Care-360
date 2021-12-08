import React, { useState } from 'react';
import {
  Button,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <View style={styles.container}>
      <View style={styles.headerDash}>
        <TouchableOpacity
          onPress={() => setCurrentPage('home')}
          style={[
            styles.bowl_Svg1,
            currentPage === 'home' ? styles.bowl_Svg1ACtive : {},
          ]}
        >
          <FontAwesome name={'home'} style={styles.svg_Arrows1} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage('users')}
          style={[
            styles.bowl_Svg1,
            currentPage === 'users' ? styles.bowl_Svg1ACtive : {},
          ]}
        >
          <FontAwesome name={'users'} style={styles.svg_Arrows1} size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCurrentPage('doctor')}
          style={[
            styles.bowl_Svg1,
            currentPage === 'doctor' ? styles.bowl_Svg1ACtive : {},
          ]}
        >
          <Fontisto name={'doctor'} style={styles.svg_Arrows1} size={30} />
        </TouchableOpacity>
      </View>

      <View style={styles.bowl_Cards}>
        <TouchableOpacity onPress={null} style={styles.bowl_Card_in}>
          <FontAwesome name={'users'} style={styles.svg_Arrows} size={40} />
          <Text style={styles.title_cardbowl}>Total Users</Text>
          <Text style={styles.countCard}>2507</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={null} style={styles.bowl_Card_in}>
          <FontAwesome5
            name={'user-shield'}
            style={styles.svg_Arrows}
            size={40}
          />
          <Text style={styles.title_cardbowl}>Total Specialists</Text>
          <Text style={styles.countCard}>2507</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={null} style={styles.bowl_Card_in}>
          <Feather name={'plus-circle'} style={styles.svg_Arrows} size={40} />
          <Text style={styles.title_cardbowl}>Add Doctor</Text>
          <Text style={styles.countCard}>2507</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
  },

  headerDash: {
    // backgroundColor: '#654',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center',
    marginTop: 50,
  },
  bowl_Svg1: {
    backgroundColor: '#EDEDED',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  bowl_Svg1ACtive: {
    backgroundColor: 'rgba(255, 184, 3, 0.4)',
  },

  svg_Arrows1: {
    color: '#200E32',
  },

  bowl_Cards: {
    alignItems: 'center',
    marginTop: 40,
  },
  bowl_Card_in: {
    backgroundColor: '#EDEDED',
    width: '90%',
    height: 70,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title_cardbowl: {
    fontSize: 17,
  },
  countCard: {
    fontSize: 22,
  },
  svg_Arrows: {
    color: '#127984',
  },
});
