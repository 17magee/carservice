import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';
import IconLeft from 'react-native-vector-icons/Ionicons'
import IconRight from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
  
export default function HeaderMini({ containerStyle,title }) {
    const navigation = useNavigation()
    return (
        <View style={[styles.mainContainer, containerStyle]}>
            <IconLeft onPress={()=>navigation.goBack()} name="arrow-back-circle-sharp" size={30} color="white" />
            <Text style={styles.heading}>{title}</Text>
            <IconRight name="menu" size={30} color="white" />
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        width: wp(100),
        height: hp(8),
        backgroundColor: AppColor.primary,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingLeft : wp(2),
        paddingRight : wp(2)
    },
    heading: {
        fontSize : AppFontSize.xl,
        AppFontWeight : AppFontWeight.bold,
        color : AppColor.white,
    }
})