import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from '../utils/style/color';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerComponent}>
        <Image
          style={styles.tinyLogo}
          source={require('../utils/img/logo.png')}
        />
        <Icon name="menu" size="35" color="#fff" onPress={() => null} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: color.blue,
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
  },
  headerComponent: {
    width: '85%',
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 100,
    height: 50,
  },
});
export default Header;
