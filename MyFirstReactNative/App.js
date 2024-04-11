import React, {useState} from 'react';
import {Text, View, Image, Button, FlatList} from 'react-native'

const Dog = props => {
  const [isHungry, setIsHungry]= useState(true);
  return 
  (  
  <View>
    
    <Text>Hello, I am {props.name}, and I am {isHungry? "hungry":"full"}!.</Text>
    <Button
      
      onPress={()=>{setIsHungry(false)}}
      title='Feed'
    />
  </View>
  );

}

const Dogs = () => {
  return (
    <View>
      <Text>Welcome all!</Text>
      <Dog name="Fido"/>
      <Dog name = "John"/>
      <Dog name="Paul"/>
    </View>
  );
}

const DogList = () => {
  return(
    <View>
      <FlatList
        data={[
          {name: "john"},
          {name: "john2"},
          {name: "john3"}
        ]}
        renderItem={({item}) => <Dog name={item.name}></Dog>}
      
      
      
      />
    </View>

  );
}

export default Dogs;//default view