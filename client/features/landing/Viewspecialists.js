import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { color } from '../../utils/style/color';

export const Viewspecialists = () => {
  return (
    <View >
    <View style={styles.section}>
      <View style={styles.textSection}>
        <Text style={styles.textLogo}>With Health 360 </Text>
        <Text style={styles.text}>
          List Your Physicians You can access your medical records and
          appointments.
        </Text>
        <TouchableHighlight underlayColor="" onPress={() => null}>
          <View style={styles.btn}>
            <Text style={styles.countText}>View Specialists</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('../../utils/img/vsf.png')}
        />
      </View>
    </View>

    </View>

  );
};
const styles = StyleSheet.create({
  btn: {
    borderColor: '#4C98C4',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#4C98C4',
    shadowOffset:{width: 0,height: 1},
    backgroundColor:'white',
    shadowOpacity: 0.8,
    height: 45,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    color: color.bluesky,
    fontSize: 16,
  },
  textLogo: {
    color: color.blue,
    fontSize: 20,
    fontWeight:'bold',
  },
  text: {
    color: color.blue,
    fontSize: 15,
    width:150,
    
  },
  textSection:{
   width:'50%',
   height:'90%',
   alignItems:'center',
   justifyContent:'space-around'
  },
  section: {
    height:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomColor:'#ECECEC',
    borderBottomWidth:2,
    marginBottom:20
  },
  image: {
     width: 200,
    height: 150,
  },
});
