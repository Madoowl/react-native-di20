import React, { useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ProgressViewIOSComponent} from 'react-native'

import Elem from './Elem';
export default function barGame(){
    
    const elements = [
        {'id':1,'name':'scissors','icon':'#'},
        {'id':2,'name':'paper','icon':'#'},
        {'id':3,'name':'rock','icon':'#'}
]
    const [robElem, setRobValeur] = useState();   
    const[curElem, setCurElem] = useState();
    //const curElem = null; //récupère choix de l'utilisateur

    function chooseRobElem(){
        //choix du robot
        robElem = Math.floor(Math.random()*3);
        return (robElem)
    } 

    return (
        <View>
            {elements.map(el => {
                return(
                    <Elem elem={el} onPressItem={el}/>
                )
            })}
        </View>
    )
    };
    

const styles= StyleSheet.create({
    
    iconContainer: {

    },
});