import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Services() {
    const renterItem =()=>{
  return (
    <View style={styles.card}>
      <Text>Services</Text>
    </View>
  )}

  return(
    <View style={styles.flatContainer}>
        <FlatList 
           
        />
    </View>
  )
}

const styles = StyleSheet.create({

})