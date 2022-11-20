import React, {useState} from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from "react-native";

const TodoItems = ({ items, onPressHandler }) => {
    return ( 
        <View style={styles.itemContainer}>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.item}</Text>
                        <Button color="red" style={styles.buttonStyle} title="Delete" onPress={()=>onPressHandler(item.key)}/> 
                    </View>
                )}
                
            />
        </View>
     );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 20,
        marginBottom: 30
    },
    item: {
        backgroundColor: "#C5C5C5",
        borderRadius: 10,
        fontSize: 25,
        margin: 10
    },
    itemText: {
        fontSize:25,
        padding: 20
    },
    buttonStyle: {
        color: "red"
    }
})
 
export default TodoItems;