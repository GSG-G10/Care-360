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
  container: {
    flex: 1,
    width: '40%',
    alignSelf: 'center',
    flexDirection: 'initial',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0.5rem',
  },
  textContainer: {},
  text: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
});

export default NavItem
