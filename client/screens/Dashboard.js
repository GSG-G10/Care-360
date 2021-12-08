import React, { useState } from 'react';
import {
  StatusBar,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import HomeDash from './dash/HomeDash';
import TableUsers from './dash/TableUsers';
import TableDoctors from './dash/TableDoctors';

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

{
  currentPage === 'home' ? <HomeDash /> :   currentPage === 'users' ? <TableUsers /> :
  currentPage === 'doctor' ? <TableDoctors /> : null
}
          
  
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

});
