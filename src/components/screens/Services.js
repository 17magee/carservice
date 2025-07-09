import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMini from '../atoms/HeaderMini'
import { Strings } from '../../constants/Strings'
import MainCard from '../atoms/MainCard'
import { ServiceData, ServicesData } from '../mockData/MockData'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts'



export default function Services() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderMini title={Strings.service} />
      <MainCard data={ServicesData} Visible={false} numColumns={2} VisibleSub={false}
        cardContainer={styles.serviceCard}
        imageStyle={styles.image}
        flatContainer={styles.flatContainer}
        textContainerStyle={styles.textcontainer}
        titleStyle={styles.title}
        buttonBoxStyle={styles.buttonBox}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColor.white
  },
  serviceCard: {
    flexDirection : 'column',
    alignItems : 'center',
    width: wp(35),
    backgroundColor: AppColor.white,
    elevation: 5,
    borderRadius : wp(3),
    marginHorizontal : wp(4),
    padding  : wp(2)
  },
  flatContainer: {
    marginHorizontal: 'auto',
    gap: wp(6),
    marginTop : hp(3),
    paddingBottom: hp(16)
  },
  image: {
    width: wp(15),
    height: wp(15)
  },
  textcontainer : {
    alignItems : 'center'
  },
  title : {
    fontSize : AppFontSize.l,
    fontWeight : AppFontWeight.semiBold,
  },
  buttonBox : {
    backgroundColor : AppColor.buttonColor,
    padding : wp(1.5),
    borderRadius : wp(2),
    marginTop : hp(1)
  }
  

})