import React, {useState} from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

const ItemForm = ({onPressHandler}) => {
    const [newItem, setNewItem] = useState("");
    return ( 
        <View style={styles.formContainer}>
            <TextInput placeholder="Add a do item..."
                onChangeText={(val) => setNewItem(val)}
                style={styles.inputBox}
                value={newItem}
            />
            <Button title="Add" disabled={newItem === ""} onPress={() => { setNewItem(""); onPressHandler(newItem)}} />
        </View>
     );
}

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 30,
        paddingTop: 20
    },
    inputBox: {
        fontSize: 25,
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor:"C5C5C5"
    }
})
 
export default ItemForm;