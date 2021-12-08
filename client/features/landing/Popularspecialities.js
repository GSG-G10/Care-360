import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { color } from '../../utils/style/color';


export const Popularspecialities = ({navigation}) => {
  return (
    <View style={styles.popularspecialities}>
      <Text style={styles.title}>Popular Specialities</Text>

      <View style={styles.cardsection}>
        <Card style={styles.card} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"Dentists"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 44, height: 51 }}
                source={require('../../utils/img/Dentists.png')}
              />
              <Title style={styles.cardtitle}>Dentists</Title>
            </View>
          </Card.Content>
        </Card>
        <Card style={styles.whitecard} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"General Doctor"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 40, height: 51 }}
                source={require('../../utils/img/Generaldoctor.png')}
              />

              <Title style={styles.cardtitle}>General Doctor</Title>
            </View>
          </Card.Content>
        </Card>
        <Card style={styles.whitecard} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"Gynecologists"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 50, height: 52 }}
                source={require('../../utils/img/Gynecologists.png')}
              />

              <Title style={styles.cardtitle}>Gynecologists</Title>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"Pediatricians"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../../utils/img/Pediatricians.png')}
              />

              <Title style={styles.cardtitle}>Pediatricians</Title>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"Skin Doctors"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 50, height: 52 }}
                source={require('../../utils/img/Skindoctors.png')}
              />

              <Title style={styles.cardtitle}>Skin Doctors</Title>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.whitecard} onPress={() => navigation.navigate('SpecialistCard', {
          specialityReady:"Ophthalmologist"
        })}>
          <Card.Content>
            <View style={styles.container}>
              <Image
                style={{ width: 70, height: 50 }}
                source={require('../../utils/img/Ophthalmologist.png')}
              />
              <Title style={styles.cardtitle}>Ophthalmologist</Title>
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: color.azzurro,
    width: '50%',
    height: 150,
  },
  cardtitle: {
    fontSize: 12,
  },
  whitecard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 150,
  },
  cardsection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  popularspecialities: {
    alignItems: 'center',
    marginBottom: 25,
  },
  container:{
   alignItems:'center',
   justifyContent:'center',
   marginTop:20,
  },
});
