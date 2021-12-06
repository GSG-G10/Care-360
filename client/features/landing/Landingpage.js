import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { color } from '../../utils/style/color';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Whoweare} from './Whoweare';
import {Viewspecialists} from './Viewspecialists';
import {Popularspecialities} from './Popularspecialities';

export const Landingpage = ({navigation}) => {
  return (
    <View style={{flex:1}}>
    <Header />
    <ScrollView>
    <Viewspecialists navigation={navigation}/>
    <Popularspecialities />
    <Whoweare />
    </ScrollView>
    <Footer />
    </View>

  );
};

