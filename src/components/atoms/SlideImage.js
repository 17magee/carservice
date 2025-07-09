import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';
import LinearGradient from 'react-native-linear-gradient';
import { AppFontSize, AppFontWeight } from '../../constants/AppFonts';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.9;

export default function SlideImage({
    sliderContainer,
    data,
    flatListStyle
}) {

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % data.length;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            setCurrentIndex(nextIndex);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, data.length]);

    const renterItem = ({ item }) => {
        return (
            <View style={[styles.mainContainer, sliderContainer]}>
                <View style={styles.card}>
                    <Image source={item.image} style={[styles.image]} />
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']}
                        start={{ x: 0, y: .5 }}
                        end={{ x: 0, y: .5 }}
                        style={styles.liner}>
                        <View style={styles.linerCard}>
                             <Image style={styles.logoper} source={item.icon} />
                            <Text style={styles.linerText}>{item.title}</Text>
                             <Text style={styles.desc}>{item.offer}</Text>
                            <Text style={styles.desc}>{item.describe}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.sliderBox}>
            <FlatList
               ref={flatListRef}
                data={data}
                renderItem={renterItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={[styles.flat, flatListStyle]}
                horizontal
                pagingEnabled
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(
                        event.nativeEvent.contentOffset.x / ITEM_WIDTH
                    );
                    setCurrentIndex(newIndex);
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    sliderBox: {
        width: ITEM_WIDTH,
        height: hp(25),
        borderRadius: wp(3),
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5,
    },
    mainContainer: {
        width: ITEM_WIDTH,
        height: hp(25),
        borderRadius: wp(3),
    },
    image: {
        width: wp(90),
        height: hp(25),
        borderRadius: wp(3),

    },
    liner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: hp(25)
    },
    linerCard: {
        position: 'absolute',
        padding: 10,
        bottom: 0,
        left: 0,
        right: 0,
    },
    linerText: {
        fontSize : AppFontSize.xl,
        fontWeight : AppFontWeight.bold,
        color: AppColor.white,
    },
    desc : {
        fontSize : AppFontSize.s,
        fontWeight : AppFontWeight.normal,
        color: AppColor.white,
    },
    logoper : {
        width : wp(20),
        height : wp(20)
    }
})