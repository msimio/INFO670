import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';
import Profile from './Profile';
import Gallery from './Gallery';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';






import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
      secondary: 'yellow',
      Text: 'black'
    },
    
  };

 

  //const Tab = createBottomTabNavigator();
  const Tab = createMaterialBottomTabNavigator();






export default function HomeScreen() 
{
  return (
    <PaperProvider theme={theme}>
        <Tab.Navigator>
          <Tab.Screen name="Gallery" component={Gallery} options={{ headerShown: false , tabBarIcon:"view-gallery"}}   />
          <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false , tabBarIcon:"account"}} />
       
   
    </Tab.Navigator>
    
    </PaperProvider>
  );
}