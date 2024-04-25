import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View,Image,ScrollView } from 'react-native';
import {Text,TextInput,Button} from 'react-native-paper'

import Message from './Message'

const MessageList = props => {
    const [text,setText]=useState('');
    const [texts, setTexts] = useState([
        {sender:"Me:", message:'Roger!'},
        {sender:"John",message:'Roger back!'}
    ]);
  
    return (
      <ScrollView style={[styles.shadow,
      {
        flexGrow: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        top:0,
        paddingVertical:30,
        //flex:1, 
        //flexDirection:'column', 
      }]}>
        <Message text="Hello" />
        <Message text="Hello2" />
        {texts.map((text,index)=>(<Message key={index} text={text}/>))}
        <View>
          <TextInput placeholder="Enter Here" defaultValue={text} onChangeText={newText=>setText(newText)}/>
          <Button icon="send" raised title='Send'
            onPress={()=>{setTexts([...texts,text]);
            setText('')
            }}/>
        </View>
  
      </ScrollView>



    );
  }

  

  export default MessageList;

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

  