import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function Start(){
//page to get Start page, with button to get to Player Page
return(
    <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={styles.button}
        onPress={()=> navigate('#')}>
            JOUER
        </TouchableOpacity>
    </View>

)
};
const styles = StyleSheet.create({
    buttonContainer: {
        heigt: 15,
        borderTopColor: 'black',
        width: 500,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 3,

    },
    button: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#004e98',
        flex: 1,
        width: 150,
        height: 70,
        maxWidth: 250,
        maxHeight: 450,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'ltr',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        positionBottom: 150,
        flexWrap: 'wrap',
    },

})