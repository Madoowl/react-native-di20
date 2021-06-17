import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';


export default function App() {

  const [page,navigate] = useState('Start');

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        {/* Header */}
        <Header title={page}/>

        {/* TODO: Ajouter navigation */}
        {page === 'Start' && < Start/>}
    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
