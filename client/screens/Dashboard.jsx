import React from 'react';
import {
  Button,
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>hi dashy</Text>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
  },
});
