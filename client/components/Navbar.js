import React from 'react';
import  Header  from './Header';
import {  View,  StyleSheet } from 'react-native';
function Navbar() {
  return (
    <View style={styles.container}>
        Navbar
    </View>
  )
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
