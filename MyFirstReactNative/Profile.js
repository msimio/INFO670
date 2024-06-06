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

  const [name, setName] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [price, setPrice] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  const [posts, setPosts] = React.useState([]);
  
  const data = [
      {key:'1', value:'Bitcoin'},
      {key:'2', value:'Ethereum'},
      {key:'3', value:'Dogecoin'},
      {key:'4', value:'Cardano'},
   
  ]

  const addProduct = () => 
  {
    //Make API Call here
    const url = `https://www.cs.drexel.edu/~mjs679/addProduct.php?name=${name}&cat_id=${categoryID}&price=${price}`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        if (data === "1") {
          setResponseStatus("Product added successfully.");
          Alert.alert("Success", "Product added successfully.");
        } else {
          setResponseStatus("Failed to add product.");
          Alert.alert("Error", "Failed to add product.");
        }
      })
      .catch(error => {
        setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
        console.log(error);
        // Alert.alert("Error", "Error: " + error.message);
      });

    
  }



  



 
  
  
    

  return (
    <View style={{ flex: 1, alignItems: "center", gap:16, marginTop:40 }}>
      <Text style={styles.heading}>Update Inventory</Text>
      <Text>Input guitar name, and price and press add guitar to add to the shop</Text>
      

      
      <TextInput
      label="Name"
      style={{width:142}}
      placeholder="Name"
      mode="outlined"
      value={name}
      onChangeText={name => setName(name)}
      />

    <TextInput
      label="Category ID"
      style={{width:142}}
      placeholder="Category ID"
      mode="outlined"
      value={categoryID}
      onChangeText={categoryID => setCategoryID(categoryID)}
      />

     

      <TextInput
      label="Price"
      style={{width:142}}
      placeholder="Price"
      mode="outlined"
      value={price}
      onChangeText={price => setPrice(price)}
      />

      


      <Button icon="guitar-electric" mode="contained" onPress={addProduct} style={{width:300}}>
        Add Guitar
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