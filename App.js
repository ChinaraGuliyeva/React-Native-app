import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.input_container}>
        <TextInput placeholder="Что-то там" style={styles.user_input} />
        <Button title="Добавить" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  user_input: { 
    width: '50%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10 }
})