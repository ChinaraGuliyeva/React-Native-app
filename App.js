import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.heading}>App</Text>
        <Image
          style={styles.geo_img}
          source={require('./assets/geolocation.png')
          }
        />
        <Button
          color='#295F88'
          title="Get geolocation" />
      </View>
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
  geo_img: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5
  },
})