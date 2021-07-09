import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

export default function ShowLocation() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleClick() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  const clearLocation = () => {
    setLocation(null)
  }

  return(<View>
          <Image
          style={styles.geo_img}
          source={require('./assets/geolocation.png')
          }
        />
        <Button
          color='#295F88'
          title="Get geolocation"
          onPress={handleClick} />
        {location ?
          <View style={styles.coordinates_container}>
            <TouchableOpacity 
              onPress={clearLocation}
              style={styles.delete_coordinates}>
              <Text style={styles.delete_coordinates_text}>X</Text>
            </TouchableOpacity>
            <Text style={styles.coordinates}>Lat: {location.coords.latitude}</Text>
            <Text style={styles.coordinates}>Lng: {location.coords.longitude}</Text>
          </View> : null}
      </View>
  );
}

const styles = StyleSheet.create({
    coordinates: {
      fontSize: 20
    },
    coordinates_container: {
      marginTop: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#248F61',
      borderRadius: 5
    },
    geo_img: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      borderRadius: 5
    },
    delete_coordinates: {
      position: 'absolute',
      right: 0,
      borderWidth: 1,
      borderColor: "#EC433D",
      width: 25,
      height: 25,
      borderRadius: 50,            
      
    }, 
    delete_coordinates_text: {
      textAlign: "center"
    }
  })