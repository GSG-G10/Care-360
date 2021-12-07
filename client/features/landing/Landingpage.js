import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';
import {Whoweare} from './Whoweare';
import {Viewspecialists} from './Viewspecialists';
import {Viewappointment} from './Viewappointment';
import {Popularspecialities} from './Popularspecialities';
import { Loadingpage } from '../loadingpage/Loadingpage';

export const Landingpage = ({navigation}) => {
  const [loaded,setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(function(){ setLoaded(true) }, 1500);
  }, [])
  return (
    <View style={{flex:1}}>
      {loaded 
      ? <View style={{flex:1}}><Header /><ScrollView>
          <Viewspecialists navigation={navigation} />
          <Popularspecialities navigation={navigation} />
          <Whoweare />
          <Viewappointment navigation={navigation} />
        </ScrollView><Footer /></View>
      : <Loadingpage />
    }
    </View>

  );
};
