import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Header, Slider } from '../atoms'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { OthersData, ServiceData, sliderData } from '../mockData/MockData';
import { Strings } from '../../constants/Strings';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ServiceCard from '../atoms/ServiceCard';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.mainContainer} >
      <Header />
      <ScrollView>
      <View style={styles.slider}>
        <View style={styles.sliderHeadContainer}>
          <Text style={styles.sliderHeaderText}>{Strings.specialOffers}</Text>
          <TouchableOpacity style={styles.seeAllContainer} onPress={()=>navigation.navigate('Offer')}>
            <Text style={styles.seeAllText}>{Strings.seeAll}</Text>
            <Icon name="keyboard-double-arrow-right" size={20} color={AppColor.primary} />
          </TouchableOpacity>
        </View>
        <Slider data={sliderData} />
      </View>

      <View style={styles.serviceContainer}>
        <View style={styles.sliderHeadContainer}>
          <Text style={styles.sliderHeaderText}>{Strings.services}</Text>
          <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAllText}>{Strings.seeAll}</Text>
            <Icon name="keyboard-double-arrow-right" size={20} color={AppColor.primary} />
          </TouchableOpacity>
        </View>
        <View>
          <ServiceCard data={ServiceData} />
        </View>
        </View>
        <View style={styles.serviceContainer} >
          <View style={styles.sliderHeadContainer}>
            <Text style={styles.sliderHeaderText}>{Strings.otherServices}</Text>
          </View>
          <View><ServiceCard data={OthersData} /></View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: AppColor.white
  },
  slider: {
    marginHorizontal: 'auto',
    marginTop: hp(1),
    gap: hp(1.5)
  },
  sliderHeadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderHeaderText: {
    fontSize: AppFontSize.l,
    fontWeight: AppFontWeight.medium,
    color: 'black'
  },
  seeAllText: {
    fontSize: AppFontSize.s,
    fontWeight: AppFontWeight.normal,
    color: AppColor.primary
  },
  serviceContainer: {
    marginTop: hp(1.5),
    marginLeft: wp(5),
    marginRight: wp(5),
    gap : wp(1)
  },
  

})