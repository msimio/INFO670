import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from './Gallery'
import ImageViewer from './ImageViewer';
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cryptocurrency Gallery"
          component={HomeScreen}
        />
        <Stack.Screen name="ImageViewer" component={ImageViewer} options={{ title: 'Logo Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
