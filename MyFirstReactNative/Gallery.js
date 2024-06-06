import React, { Component, useEffect, useState } from "react";

import { View, Text, Alert, FlatList } from "react-native";
import { TextInput,List, Button } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import { StyleSheet} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Gallery() {

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
  const [myvar, setMyvar] = React.useState('');
  
  //useEffect(loadData, []);
  //useEffect(()=>{loadData})
  
  ///Title array
  var arr = []


  const loadData = async () => {



    fetch('https://www.cs.drexel.edu/~mjs679/getAllProducts.php')
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData)
    setPosts(jsonData)
    //setMyvar(jsonData['0'])
    Object.keys(jsonData).forEach(function(k){
      console.log(k + ' - ' + jsonData[k].name + ' - $' + jsonData[k].price);
      arr.push(jsonData[k].name + ' - $' + jsonData[k].price)
      console.log(arr)
    setMyvar(JSON.stringify(arr))
      
      
  });

    
  })

  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

  
  };


  return (
    <View style={{ flex: 1, alignItems: "center", gap:16, marginTop:40 }}>
      <Text style={styles.heading}>View Inventory</Text>
      <Text>Press the button below to view all of the guitars in the inventory</Text>


      <Button icon="guitar-pick-outline" mode="contained" onPress={loadData} style={{width:300}}>
       Get All Guitars
      </Button>



      <div>
        
      {Object.keys(posts).map((key, i) => (
        <p key={i}>
          <span>Guitar: {posts[key].name} - </span>
          <span>Price: ${posts[key].price}</span>

        </p>
      ))}
      </div>



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