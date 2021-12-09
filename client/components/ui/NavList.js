import React from 'react';
import { View,TouchableOpacity, StyleSheet, Text,  } from 'react-native';
import { Icon } from 'react-native-elements';

function NavList({ navigation }) {
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
      link: 'Appointment',
    },
  ];

  return (
    <View style={styles.container}>
      {NavListData.map((item, i) => {
        return (
          <TouchableOpacity
            style={styles.bowl}
            key={i}
            onPress={() => navigation.navigate(`${item.link}`, {specialityReady: ''})}
          >
            <Icon
              name={item.icon}
              type="font-awesome"
              color="#000"
              fontSize={30}
            />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bowl: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    padding: 10,

  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default NavList;
