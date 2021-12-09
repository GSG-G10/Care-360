import React,{useState} from 'react';
import {  View,  StyleSheet,Text } from 'react-native';
import { NavList, Search, Contact } from './ui';
// import { Link } from "react-router-native";
import { Searchbar } from 'react-native-paper';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer'; 

function Navbar({ navigation }) {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <NavList navigation={navigation} />
      <View onPress={() => navigation.navigate('SpecialistCard')}>
        <Searchbar
          placeholder="Search doctors"
          iconColor="#022752"
          style={styles.bowlSearch}
        />
      </View>
      <View style={styles.linkWrapper}>
        {!isAuth ? (
          <View style={styles.wrapper}>
            {/* <Link to="/login"> */}
            <Text style={styles.text}>Log in</Text>
            {/* </Link> */}
            {/* <Link to="/signup"> */}
            <Text style={styles.text}>Sign up</Text>
            {/* </Link> */}
          </View>
        ) : (
          // <Link to="/logout">
          <Text style={styles.text}>Log out</Text>
          // </Link>
        )}
      </View>
      <Contact />
      <Text>© Medipol Health Group. All Rights Reserved.</Text>
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
  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '43%',
  },
  text: {
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  bowlSearch: { width: '80%', height: 35, borderRadius: 20, fontSize: 10 },
});
export default Navbar;
