import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, Slider } from '../atoms'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { sliderData } from '../mockData/MockData';



const Home = () => {
  return (
    <SafeAreaView style={styles.mainContainer} >
      <Header/>
      <View style={styles.slider}>
      <Text></Text>
      <Slider data={sliderData} sliderContainer={styles.sliderContainer}/>
      </View>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  
mainContainer : {
   flex : 1,
   backgroundColor : AppColor.white
},
sliderContainer :{
  alignItems : 'center',
}
})