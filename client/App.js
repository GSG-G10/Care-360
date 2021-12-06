import React from 'react';
import { StyleSheet,
  StatusBar
,Platform,
} from 'react-native';
import Navigation from './navigation/Navigation';


export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
