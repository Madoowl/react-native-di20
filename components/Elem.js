import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Pressable, Alert, Modal} from 'react-native'

export default function Elem(props){
console.log(props)
function onPressItem(item){

}
    return (
            <TouchableOpacity id={props.id} style={styles.articleContainer} onPress={()=> props.onPressItem(props.name)} > <Text style={sText.articleTitle}>{props.name}</Text> </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    articleContainer : {
      marginHorizontal: 10,
      borderBottomWidth: 1,
      paddingVertical: 15
    }
  })
  /* Ajout d'une nouvelle constante pour le texte */
  const sText = StyleSheet.create({
      articleTitle: {
        fontSize: 24,
        marginBottom: 5,
        color: 'black'
      },
      articleDesc: {
        fontSize: 16
      }
    }) 
    