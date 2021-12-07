import React from 'react';
import { StyleSheet,
  StatusBar
,Platform,
} from 'react-native';
import Navbar from './components/Navbar';
import Book from './screens/Book';
import Navigation from './navigation/Navigation';
import SpecialistCard from './Features/Specialists/Screen/Specialist-view';


export default function App() {
  return (
    <>
     <SpecialistCard />
    </>
  );
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
