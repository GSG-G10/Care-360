import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
import axioscreate from '../../components/axioscreate';
function HomeDash({navigation}) {

  const [analysis, setAnalysis] = useState([]);
  const getAllUsers = async () => {
    let { data } = await axioscreate.get(`/api/v1/analysis`);
    setAnalysis(data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);


    return (
        <View style={styles.bowl_Cards}>
        <TouchableOpacity  style={styles.bowl_Card_in}>
          <FontAwesome name={'users'} style={styles.svg_Arrows} size={40} />
          <Text style={styles.title_cardbowl}>Total Users</Text>
          <Text style={styles.countCard}>{analysis.countUser}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.bowl_Card_in}>
          <FontAwesome5
            name={'user-shield'}
            style={styles.svg_Arrows}
            size={40}
          />
          <Text style={styles.title_cardbowl}>Total Appointments</Text>
          <Text style={styles.countCard}>{analysis.CountAppoints}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Addadoctor')}  style={styles.bowl_Card_in}>
          <Feather name={'plus-circle'} style={styles.svg_Arrows} size={40} />
          <Text style={styles.title_cardbowl}>Add Doctor</Text>
          <Text style={styles.countCard}>{analysis.CountDocs}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default HomeDash
const styles = StyleSheet.create({
bowl_Cards: {
    alignItems: 'center',
    marginTop: 40,
  },
  bowl_Card_in: {
    backgroundColor: '#EDEDED',
    width: '90%',
    height: 70,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title_cardbowl: {
    fontSize: 17,
  },
  countCard: {
    fontSize: 22,
  },
  svg_Arrows: {
    color: '#127984',
  },
});
