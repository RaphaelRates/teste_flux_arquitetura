import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View,  TouchableOpacity } from 'react-native';
import TodoList from './src/compomnents/Todolist';


export default function App() {

  const [texto, setTexto] = useState<string>("");

  return (

     <TodoList/>

    
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'skyblue',
  },
  teto: {
    fontSize: 40
  },
  quadrados:{
    marginTop: 40, height: "100%", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10
  }
});
