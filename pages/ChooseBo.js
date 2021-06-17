import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


export default function ChooseBo(props) {


  function iClick() {
    let _round = checked;
    setChecked(_round);
    alert(checked);

  }

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Nombre de manche?</Text>
      <TouchableOpacity style={styles.mainContainer}>
        <View style={[styles.radioButtonIcon]}>
          <View style={[styles.radioButtonIconInnerIcon]} />
        </View>
        <View style={[styles.radioButtonTextContainer]}>
          <Text style={styles.radioButtonText}>3 manches </Text>
        </View>
      </TouchableOpacity>
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

  },
  mainContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0.5,
    borderColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  radioButtonIcon: {
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "red",
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIconInnerIcon: {
    height: 25,
    width: 25,
    backgroundColor: "red",
    borderRadius: 25 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  radioButtonTextContainer: {
    flex: 5,
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
  },
  radioButtonText: {
    fontSize: 18,
  },
})
