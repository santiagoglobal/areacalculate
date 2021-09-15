import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import area from './assets/area.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image 
            source={area}
            style={{height: 150, width: 150, alignSelf: 'flex-start'}}
        />
      </View>
      <View style={styles.viewForm}>
        <TextInput placeholder="  Perímetro" keyboardType="numeric" style={styles.input} >
        </TextInput>

        <Text style={styles.resultado}>resultado:</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: 'lightgrey',
    height: 180,
    borderRadius: 30,
    justifyContent: "center"
  },
  input: {
      height: 40,
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth: 1,
      width: "85%",
      marginRight: 5,
      marginLeft: -5,
      marginBottom: 10,
      color: "#000",
      paddingHorizontal: 20,
  },
  resultado: {
    color: "red",

  }
});
