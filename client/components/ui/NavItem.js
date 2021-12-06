import React from 'react'
import { Icon } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';

function NavItem({ icon, title, link }) {
    return (
        <View style={styles.container}>
            <Icon name={icon} type='font-awesome' color='#000' fontSize={30} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {},
  textContainer: {},
    text: {},
});

export default NavItem
