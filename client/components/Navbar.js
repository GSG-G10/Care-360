import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavList, Search, Contact } from './ui';
// import { Link } from "react-router-native";
import { Searchbar } from 'react-native-paper';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function Navbar({ navigation }) {
  const [isAuth, setIsAuth] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.bowlMenu}>
        <NavList navigation={navigation} />
        <Searchbar
          placeholder="Search doctors"
          iconColor="#022752"
          style={styles.bowlSearch}
          onChangeText={(t) => setValueSearch(t)}
          onSubmitEditing={() =>
            navigation.navigate('SpecialistCard', {
              specialityReady: valueSearch,
            })
          }
        />
        <View style={styles.bowlAutoBottom}>
          <View style={styles.linkWrapper}>
            {!isAuth ? (
              <View style={styles.wrapper}>
                <Text
                  style={styles.textwrapper}
                  onPress={() => navigation.navigate('LoginScreen')}
                >
                  Log in
                </Text>
                <Text
                  style={styles.textwrapper}
                  onPress={() => navigation.navigate('SignupScreen')}
                >
                  Sign up
                </Text>
              </View>
            ) : (
              <Text style={styles.text}>Log out</Text>
            )}
          </View>
          <Contact />
          <Text>© Medipol Health Group. All Rights Reserved.</Text>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  bowlMenu: {
    flex: 1,
  },
  bowlAutoBottom: {
    flexDirection: 'column',
    marginTop: 30,
    padding: 6,
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },

  textwrapper: {
    fontSize: 15,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '43%',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
  },
  bowlSearch: {
    width: '80%',
    height: 35,
    borderRadius: 20,
    fontSize: 10,
    marginTop: 40,
  },
});
export default Navbar;
