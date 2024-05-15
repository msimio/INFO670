import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';

import { MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

  const pressLike = () => {
    return(
      <Text>Home Screen 2</Text>

    );

   }


export default function Gallery({ navigation }) {
  return (
    <PaperProvider theme={theme}>

    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
      <Text style={{margin:30, fontSize:20}}>Gallery Screen</Text>
      <Text style={{margin:10,  textAlign:"center"}}>Welcome to the Cryptocurrency Logo Gallery. Tap an icon to see an expanded view of the logo!</Text>


      <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>


      <TouchableOpacity onPress={() =>
        navigation.navigate('ImageViewer', {
          itemId: 1,
        })
      }>
        <Image source={require("./assets/btc.png")} style={{width:20, height:20,margin:5}} />
        <Text>BTC</Text>
      </TouchableOpacity>





      <TouchableOpacity onPress={() =>
        navigation.navigate('ImageViewer', {
          itemId: 2,
        })
      }>
        <Image source={require("./assets/eth.png")} style={{width:20, height:20,margin:5}} />
        <Text>ETH</Text>
      </TouchableOpacity>

      </View>



      <View style={{  alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>

      <TouchableOpacity onPress={() =>
        navigation.navigate('ImageViewer', {
          itemId: 3,
        })
      }>
        <Image source={require("./assets/doge.png")} style={{width:20, height:20,margin:5}} />
        <Text>DOGE</Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={() =>
        navigation.navigate('ImageViewer', {
          itemId: 4,
        })
      }>
        <Image source={require("./assets/ada.png")} style={{width:20, height:20,margin:5}} />
        <Text>ADA</Text>
      </TouchableOpacity>

      </View>


      
    </View>

    </PaperProvider>
  );
}