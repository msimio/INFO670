import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from './Gallery'
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Michael's Guitar Shop"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
