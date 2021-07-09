import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ShowLocation from './ShowLocation.js';

export default function App() {
  return (
    <View style={styles.screen}>
        <Text style={styles.heading}>Chinara's App</Text>
        <ShowLocation/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
    color: '#044476'
  },
})