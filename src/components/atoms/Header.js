import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { StrictMode, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import { User } from '../../assets/images';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBox from './SearchBox';
import { Strings } from '../../constants/Strings';
import BottomSheet from './BottomSheet';




const Header = ({
    headerContainer,
    UserName = 'Guest',
    wish = "Good Morning"
}) => {
    

    return (
        <View style={[styles.mainContainer, headerContainer]}>
            <View style={styles.firstContainer}>
                <View style={styles.rightContainer}>
                    <Image source={User} style={styles.image} />
                    <View style={styles.userNameContainer} >
                        <Text style={styles.userName}>{`Hai!.. ${UserName}`}</Text>
                        <Text style={styles.wishText}>{`${wish}, Have a nice day`}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name="menu" size={35} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>{Strings.searchMore}</Text>
                <SearchBox searchContainer={styles.searchBox} />
            </View>
            

            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: AppColor.primary,
        padding: wp(3),
        gap: wp(3),
        paddingBottom: hp(2),
        borderBottomLeftRadius: wp(3),
        borderBottomRightRadius: wp(3)
    },
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp(1)
    },
    image: {
        width: wp(15),
        height: wp(15)
    },
    userNameContainer: {
        gap: hp(.3),
    },
    userName: {
        fontSize: AppFontSize.l,
        AppFontWeight: AppFontWeight.bold,
        color: AppColor.white
    },
    wishText: {
        fontSize: AppFontSize.xs,
        AppFontWeight: AppFontWeight.extraLight,
        color: AppColor.white
    },
    searchContainer: {
        margin: 'auto',
        gap: hp(1)
    },
    searchText: {
        fontSize: AppFontSize.xl,
        AppFontWeight: AppFontWeight.bold,
        color: AppColor.white
    }
})