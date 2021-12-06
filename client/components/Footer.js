import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from '../utils/style/color';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerComponent}>
        <Icon name="home" size="35" color="#fff" onPress={() => null} />
        <Icon name="search" size="35" color="#fff" onPress={() => null} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: '10%',
    backgroundColor: color.blue,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
  },
  footerComponent: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
