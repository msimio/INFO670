import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,  View,Image,ScrollView } from 'react-native';
import {Text,TextInput,Button,Card,Avatar,IconButton} from 'react-native-paper'

const Message = props =>{
    return (
        /*
      <View style={[styles.messageContainer,
      {
        alignItems:"center",
        marginHorizontal:5,
        marginVertical:2
      }
      
      ]}>
        <Image source={require("../assets/favicon.png")} style={{width:20, height:20,margin:5}} />
        <Text>{props.text}</Text>
      </View>
      */
     
        //props.text.sender=='Weimao'? thing 1: thing2
     
     <Card.Title
        title="Hello"
        subtitle={props.Text}//props.text.sender
        left={(props) => <Avatar.Icon {...props} icon="message" />}
        right={(props) => <IconButton {...props} icon="delete" />}

     />
    );
    
  }

  export default Message;

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