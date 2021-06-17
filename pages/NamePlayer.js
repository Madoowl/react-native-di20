import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Alert } from 'react-native'


export default function NamePlayer(props) {

    const [name, onChangeName] = useState('');



    function iClick() {
        let _name = name;
        onChangeName(_name);
        //alert(name);
        //TODO: refirect vers BO

    }

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Votre nom ?</Text>
            <TextInput
                onSubmitEditing={iClick}
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
            />

            <TouchableOpacity onPress={iClick} style={styles.button}>
                <Text style={styles.button}> Valider!</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: "80 %",
        flex: 1,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10
    },
    text: {
        alignSelf: "center",
        fontSize: 30,
    },
    button: {
        alignSelf: "center",
        fontSize: 30,
        backgroundColor: "#2E77C3",
        color: "white",
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingRight: "20%",
        paddingLeft: "20%",
        borderRadius: 10

    }
})
