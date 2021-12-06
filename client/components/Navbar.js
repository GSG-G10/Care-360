import React from 'react';
import {  View,  StyleSheet,Text } from 'react-native';
import { NavList, Search, Contact } from './ui';

function Navbar() {
  return (
    <View style={styles.container}>
      <NavList />
      <Search />
      <Contact />
      <Text>© Medipol Health Group. All Rights Reserved.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Navbar;
