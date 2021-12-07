import React from 'react'
import {  View,  StyleSheet } from 'react-native';
import NavItem from './NavItem';
const NavListData = [
  {
    title: 'Home',
    icon: 'home',
    link: 'home',
  },
  {
    title: 'Specialists',
    icon: 'graduation-cap',
    link: 'specialists',
  },
  {
    title: 'Appointment',
    icon: 'edit',
    link: 'appointment',
  },
];
function NavList() {
    return (
        <View style={styles.container}>
            {
                NavListData.map((item, index) => {
                    return (
                        <NavItem key={index} title={item.title} icon={item.icon} link={item.link} />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: '1.1rem 0',
    }
})
export default NavList
