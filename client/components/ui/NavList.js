import React from 'react'
import {  View,  StyleSheet } from 'react-native';
import NavItem from './NavItem';
const NavListData =
[
    {
        title: 'Home',
        icon: 'home',
        link: 'home',
    },
    {
        title: 'Specialists',
        icon: 'edit',
        link: 'specialists',
    },
    {
        title: 'Appointment',
        icon: 'graduation-cap',
        link: 'appointment',
    },
]
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
    }
})
export default NavList
