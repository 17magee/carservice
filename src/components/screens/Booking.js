import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMini from '../atoms/HeaderMini'
import { Strings } from '../../constants/Strings'

export default function Booking() {
  return (
   <SafeAreaView>
    <HeaderMini title={Strings.booking} />
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})