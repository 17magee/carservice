import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../constants/AppColors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Octicons';
import App from '../../../App';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';
import { Strings } from '../../constants/Strings';



export default function SearchBox({ searchContainer }) {
    return (
        <View style={[styles.mainContainer, searchContainer]}>
            <TextInput 
            placeholder={Strings.searchMore}
            placeholderTextColor={AppColor.primary}
            style={styles.input} />
            <Icon name="search" size={25} color="#8D38C9" style={styles.icon} />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: AppColor.white,
        borderRadius: wp(1.5),
        width: wp(90),
        fontSize : AppFontSize.m,
        fontWeight : AppFontWeight.semiBold,
        paddingHorizontal : wp(5),
        color: AppColor.primary,
    },
    icon: {
        position: 'absolute',
        right: wp(5),
        top: hp(1)
    }
})