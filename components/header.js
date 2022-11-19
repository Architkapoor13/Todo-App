import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        textAlign: "center",
        backgroundColor: "#ADD8E6",
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 30,
        textAlign: "center"
    }
})

export default Header