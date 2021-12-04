import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { color } from '../../utils/style/color';

export const Whoweare = () => {
  return (
    <View style={styles.whowearesection}>
      <View style={styles.whoweare}>
        <Image
          style={styles.whoweareimg}
          source={require('../../utils/img/whosearepic.png')}
        />
      </View>
      <View style={styles.whowearetext}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: color.blue }}>
          Who we are ?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id nulla
          vel lorem dapibus fringilla eget non felis, porttitor lectus.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  whowearesection: {
    flex: 1,
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  whoweare: {
    width: '55%',
  },
  whoweareimg: {
    width: '90%',
    height: '100%',
  },
  whowearetext: {
    width: '40%',
  },
});
