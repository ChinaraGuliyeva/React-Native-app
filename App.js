import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleClick(){
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
  }

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
          title="Get geolocation" 
          onPress={handleClick}/>
        {location?  
        <View style={styles.coordinates_container}>
          <Text style={styles.coordinates}>Lat: {location.coords.latitude}</Text>
          <Text style={styles.coordinates}>Lng: {location.coords.longitude}</Text>
        </View>: null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  coordinates: {
    fontSize: 20
  },
  coordinates_container:{
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#248F61',
    borderRadius: 5  
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