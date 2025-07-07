import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ServiceData } from '../mockData/MockData'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';


export default function ServiceCard({data}) {
    const renterItem =({item})=>{
  return (
    <TouchableOpacity  activeOpacity={.9} style={styles.card}>
         <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.title}</Text>
      
    </TouchableOpacity>
  )}

  return(
    <View style={styles.flatContainer}>
        <FlatList 
           data={data}
           renderItem={renterItem}
           keyExtractor={(item) => item.id}
           horizontal
           contentContainerStyle = {styles.container}
           showsHorizontalScrollIndicator={false}
           scrollEnabled = {false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  card : {
    flexDirection : 'column',
    alignItems : 'center',
    width : wp(18),
    backgroundColor : AppColor.white,
    borderRadius : wp(3),
    padding : 2,
    elevation : 4,
  },
  container : {
    gap : wp(5),
    paddingVertical : hp(1),
    paddingHorizontal : wp(.7)
  },
  
  image : {
    width : wp(10),
    height : wp(10)
  },
  text :{
    fontSize : AppFontSize.s,
    fontWeight : AppFontWeight.bold,
    color : AppColor.primary,
  }
})