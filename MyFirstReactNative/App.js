import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import {PaperProvider, MD3LightTheme as DefaultTheme} from "react-native-paper";
import { StyleSheet, Text, View,TextInput,Image,Button,ScrollView } from 'react-native';
import MessageList from './ui/MessageList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green'
  }

}

const ChatScreen =(((navigation) =>{
  <PaperProvider theme={theme}>
    <View style={styles.container}>
      <MessageList />
      <StatusBar style="auto" />
    </View>
    </PaperProvider>

}))

const NextScreen = ((navigation)=> {
  return(
    <PaperProvider theme={theme}>
    <View style={styles.container}>
      <MessageList />
      <StatusBar style="auto" />
    </View>
    </PaperProvider>

  )
})

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen/>
        <Stack.Screen/>

      </Stack.Navigator>

    </NavigationContainer>
    
  );
}
//App.registry
//nagivation.navigate




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  messageContainer:
  {
    flex:1,
    flexDirection:'row',
    backgroundColor: "skyblue",
    alignItems:"center",
    justifyContent:"center",

  },
  shadow:
  {
    shadowColor:"171717",
    shadowOffsetWidth:0,
    shadowOffsetHeight:2,
    shadowOpacity:.2,
    shadowRadius:3,
    backgroundColor:'white',
    zIndex: 9999,
  }
});