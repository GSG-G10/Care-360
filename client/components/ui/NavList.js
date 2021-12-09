import React from 'react'
import {  View,  StyleSheet } from 'react-native';
import NavItem from './NavItem';
const NavListData = [
  {
    title: 'Home',
    icon: 'home',
    link: 'Landingpage',
  },
  {
    title: 'Specialists',
    icon: 'graduation-cap',
    link: 'SpecialistCard',
  },
  {
    title: 'Appointment',
    icon: 'edit',
    link: 'appointment',
  },
];
function NavList({ navigation }) {
  return (
    <View style={styles.container}>
      {NavListData.map((item, index) => {
        return (
          <NavItem
            navigation={navigation}
            key={index}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: '1.5rem 0',
      marginBottom: '1.5rem',
    }
})
export default NavList
