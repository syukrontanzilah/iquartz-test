import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/Router';


const App = () => {
  return (
   <NavigationContainer>
     <Router/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
