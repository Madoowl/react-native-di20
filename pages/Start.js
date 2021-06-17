import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function Start(){
//page to get Start page, with button to get to Player Page
return(
    <View style={{flex:1}}>
        <TouchableOpacity
        style={styles.button}>
            JOUER
        </TouchableOpacity>
    </View>

)
};
const styles = StyleSheet.create({
    buttonContainer: {
        heigt: 100,
        borderTopWidth: 2,
        borderTopColor: 'black'
    },
    button: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'orange',
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

})