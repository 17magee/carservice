import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppColor } from '../../constants/AppColors';

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
        marginTop: hp(2),
        width: ITEM_WIDTH,
        height: hp(25),
        borderRadius: wp(3),
        backgroundColor: '#fff',
        alignSelf: 'center',
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

    }
})