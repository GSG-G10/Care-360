/* eslint-disable */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from '../utils/style/color';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerComponent}>
        <Icon
          name="home"
          style={styles.icon}
          color="#fff"
          onPress={() => null}
        />
        <Icon
          name="search"
          style={styles.icon}
          color="#fff"
          onPress={() => null}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
  },
  footer: {
    height: '10%',
    width: '100%',
    backgroundColor: color.blue,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
  footerComponent: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
