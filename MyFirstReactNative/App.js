import React, { useState } from "react"; 
import { 
    View, 
    Text, 
    TextInput, 
    Button, 
    FlatList, 
    StyleSheet, 
} from "react-native"; 
  
const App = () => { 
    //set item for textinput
    const [item, setItem] = useState(""); 
    //list for display in FlatList
    const [items, setItems] = useState([]); 
    //States to determine if we are in edit mode
    const [editIndex, setEditIndex] = useState(-1); 
  
    const addItem = () => { 
        //Check of textinput has anything in it
        if (item) 
        { 
            if (editIndex !== -1) { 
                //We are in edit mode
                //List of updated items
                const updatedItems = [...items]; 
                updatedItems[editIndex] = item; 
                setItems(updatedItems); 
                //poopulate FlatList
                setEditIndex(-1); 
                //reset to nonedit mode
            } else { 
                // Add new task item if not editing
                setItems([...items, item]); 
                

            } 
            setItem(""); 
        } 
    }; 
  
    const editItem = (index) => { 
        const itemToEdit = items[index]; 
        //Display item to edit in TextInput
        setItem(itemToEdit); 
        setEditIndex(index); 
        //will be added via AddItem
    }; 
  
    const deleteItem = (index) => { 
        const updatedItems = [...items]; 
        updatedItems.splice(index, 1); 
        setItems(updatedItems); 
    }; 
  
    const renderItem = ({ item, index }) => ( 
        <View style={styles.addedItem}> 
            <Text 
                style={styles.itemList}>{item}</Text> 
            <View 
                style={styles.itemButtons}>
                <Button title='Edit'
                    color={"#ADD8E6"}
                    onPress={()=>editItem(index)}/> 
                <Button title='Delete'
                    color={"#ADD8E6"}
                    onPress={()=>deleteItem(index)}/> 
            </View> 
        </View> 
    ); 
  
    return ( 
        <View style={styles.container}> 
            <Text style={styles.heading}>Grocery List</Text> 
            <TextInput 
                style={styles.input} 
                placeholder="Enter Item Here"
                value={item} 
                //Hooks to update
                onChangeText={(text) => setItem(text)} 
            /> 

            <Button title='Add Item'
                    onPress={addItem}/> 


            <FlatList 
                data={items} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
            /> 
        </View> 
    ); 
}; 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 10, 
        marginTop: 50, 
        gap: 5
    }, 
    heading: { 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign:"center",
        marginBottom: 10, 
        fontFamily:"serif",
        color: "#1B5DE1", 
    }, 
    input: { 
        borderWidth: 3, 
        borderColor: "#ADD8E6", 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 10, 
        fontSize: 18, 
    }, 
    
   
    addedItem: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 15, 
        fontSize: 18, 
    }, 
    itemList: { 
        fontSize: 19, 
        color: "#1B5DE1"
    }, 
    itemButtons: { 
        flexDirection: "row", 
        gap: 2,
    }, 
    
    
}); 
  
export default App;