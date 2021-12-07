import React from 'react';
import { ActivityIndicator, Text, View,Image, StyleSheet } from 'react-native';
import { color } from '../../utils/style/color';

export const Loadingpage = () => {
  return (
    <View style={styles.loadding}>
          <View style={styles.section}>
              <Image style={styles.img} source={require('../../utils/img/logo.png')} />
          <Text style={styles.text}>Quality care on your Schedule</Text>
      </View>
      <View>
      
      <ActivityIndicator size="large" color="#fff" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loadding: {
    flex: 1,
    height:"50%",
    backgroundColor: color.blue,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  section: {
    width:"80%",
    height:"30%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 15,
    color:'#fff'
  },
});
