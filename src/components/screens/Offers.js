import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderMini from '../atoms/HeaderMini'
import { Strings } from '../../constants/Strings'
import MainCard from '../atoms/MainCard'
import { offerData } from '../mockData/MockData'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts'

export default function Offers() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderMini title={Strings.offers} />
      
        <View>
          <MainCard data={offerData}
            ContainerStyle={styles.cardContainer}
            cardContainer={styles.card}
            imageStyle={styles.image}
            titleStyle={styles.title}
            subStyle={styles.decribe}
            subLastStyle={styles.decribe}
            buttonBoxStyle={styles.buttonBox}
            buttonTextStyle={styles.btnText}
            flatContainer={styles.flatcontainer}
            iconBoxStyle={styles.iconBox}
            iconStyle={styles.icon}

          />
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColor.white,
  },
  cardContainer: {
    flexDirection: 'column',
    backgroundColor: AppColor.white
  },
  card: {
    flexDirection: 'row',
    width: wp(90),
    margin: 'auto',
    gap: wp(3),
    padding: wp(2),
    elevation: 5,
    backgroundColor: AppColor.white,
    borderRadius: wp(2)
  },
  flatcontainer: {
    marginTop: hp(2),
    gap: hp(2),
    padding: wp(2),
    paddingBottom: hp(34)
  },
  image: {
    width: wp(20),
    height: wp(20)
  },
  title: {
    fontSize: AppFontSize.l,
    fontWeight: AppFontWeight.bold
  },
  decribe: {
    fontSize: AppFontSize.xs,
    fontWeight: AppFontWeight.normal
  },
  iconBox: {
    position: 'absolute',
    padding: wp(1),
    right: wp(0),
    backgroundColor: AppColor.primary,
    borderBottomRightRadius: wp(),
    borderBottomLeftRadius: wp(18),
  },
  icon: {
    width: wp(10),
    height: wp(10),
    marginLeft: wp(2),
    marginBottom: hp(2)
  },
  buttonBox: {
    backgroundColor: AppColor.buttonColor,
    width: wp(25),
    marginTop: hp(1),
    padding: wp(2),
    alignItems: 'center',
    borderRadius: wp(2)
  },
  btnText: {
    fontSize: AppFontSize.xs,
    fontWeight: AppFontWeight.semiBold,
    color: AppColor.white

  }
})