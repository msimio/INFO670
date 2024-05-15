import React, { Component, useEffect, useState } from "react";

import { View, Text, Alert } from "react-native";
import { TextInput,List, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import { StyleSheet} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile() {

  const [text, setText] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [save, setSave] = React.useState("Hello");
  const [selectedItem, setSelectedItem] = React.useState('');
  const [expanded, setExpanded] = React.useState(true);

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Bitcoin'},
      {key:'2', value:'Ethereum'},
      {key:'3', value:'Dogecoin'},
      {key:'4', value:'Cardano'},
   
  ]


  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('my-username', text);
      await AsyncStorage.setItem('my-bio', bio);
      await AsyncStorage.setItem('my-fav', selectedItem);
      if(text=="")
      {
        Alert.alert('Please enter a username')
      }
      else if(bio=="")
      {
        Alert.alert('Please enter a bio')
      }
      else
      {
      Alert.alert('Profile Saved')
      }
    } catch (e) {
      Alert.alert('Profile Not Saved')
      // saving error
    }
  };
  //useEffect(loadData, []);
  //useEffect(()=>{loadData})

  

  const loadData = async () => {
    try {
      const value1 = await AsyncStorage.getItem('my-username');
      const value2 = await AsyncStorage.getItem('my-bio');
      setText(value1)
      setBio(value2)

      //Alert.alert('Profile Loaded')
      
    } catch (e) {
      // error reading value
      //Alert.alert('Profile Not Loaded')
      //setSave("Not loaded")
    }
  };

  useEffect(() => {
    // write your code here, it's like componentWillMount
    loadData();
}, [])

  
  
    

  return (
    <View style={{ flex: 1, alignItems: "center", gap:16, marginTop:40 }}>
      <Text style={styles.heading}>Welcome to your Profile!</Text>
      <Text>Enter your username, a brief bio and your favorite cryptocurrency to complete your profile!</Text>
      
      <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>

      
      <TextInput
      label="Username"
      style={{width:142}}
      placeholder="Username"
      mode="outlined"
      value={text}
      onChangeText={text => setText(text)}
      />

      <TextInput
      label="Bio"
      style={{width:142}}
      placeholder="Bio"
      mode="outlined"
      value={bio}
      onChangeText={bio => setBio(bio)}
      />

      </View>

      

      

      <List.Accordion
        title="Cryptocurrencies"
        style={{width:300}}
        left={props => <List.Icon {...props} icon="bitcoin" />}>
        <List.Item title="Bitcoin" onPress={() => {setSelectedItem('Bitcoin');}} />
        <List.Item title="Ethereum" onPress={() => {setSelectedItem('Ethereum');}} />
        <List.Item title="Dogecoin" onPress={() => {setSelectedItem('Dogecoin');}} />
        <List.Item title="Cardano" onPress={() => {setSelectedItem('Cardano');}} />


      </List.Accordion>

      <Text>Favorite Cryptocurrency: {selectedItem}</Text>

      



      <Button icon="content-save" mode="contained" onPress={storeData} style={{width:300}}>
        Save Info
      </Button>
      <Button icon="content-save" mode="contained" onPress={loadData} style={{width:300}}>
        Load Info
      </Button>
      

      

     

    </View>


  );

  

  

  
};

const styles = StyleSheet.create({ 

  heading: { 
      fontSize: 30, 
      fontWeight: "bold", 
      textAlign:"center",
      marginBottom: 10, 

      
  }, 
  
  
 
  
  
}); 