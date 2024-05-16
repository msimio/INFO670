import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { TextInput,List } from 'react-native-paper';

const ImageViewer = ({route}) => {
    const [text, setText] = React.useState("");
    const [bio, setBio] = React.useState("");
    const [shortDesc, setshortDesc] = React.useState("");
    const { itemId } = route.params;
    
    var imgsrc = "./assets/btc.png"
    const BTC_ICON = require("./assets/btc.png");
    const ETH_ICON = require("./assets/eth.png");
    const DOGE_ICON = require("./assets/doge.png");
    const ADA_ICON = require("./assets/ada.png");


    if(itemId===1)
    {
      imgsrc=BTC_ICON
      var mystr = "The first cryptocurrency created by Satoshi Nakamoto"
      //setshortDesc("The first cryptocurrenmcy created by Satoshi Nakamoto")
    }
    else if(itemId===2)
    {
      imgsrc=ETH_ICON
      var mystr = "A proof-of-stake currency created by Vitalik Buterin"
      //setshortDesc("A proof-of-stake currency created by Vitalik Buterin")
    }
    else if(itemId===3)
    {
      imgsrc=DOGE_ICON
      var mystr = "A 'memecoin' made popular by Elon Musk"
      //setshortDesc("A memecoin made popular by Elon Musk")
    }
    else if(itemId===4)
    {
      imgsrc=ADA_ICON
      var mystr = "An environmentally friendly coin maintained by Charles Hoskinson"
      //setshortDesc("An environmentally friendly coin maintained by Charles Ho")
    }
    



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={imgsrc} style={{width:200, height:200,margin:5}} />
      <Text>{mystr}</Text>


      



      
     

    </View>
  );
};

export default ImageViewer;