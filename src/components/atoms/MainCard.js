import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MainCard({
    data,
    Visible = true,
    VisibleSub =true,
    ContainerStyle,
    cardContainer,
    imageStyle,
    textContainerStyle,
    titleStyle,
    subStyle,
    subLastStyle,
    buttonBoxStyle,
    buttonTextStyle,
    flatContainer,
    iconBoxStyle,
    iconStyle,
    numColumns
    
}) {

    const renterItem = ({ item }) => {
        return (
            <View style={[styles.mainContainer,ContainerStyle]}>
                <View style={[styles.card,cardContainer]}>
                    <Image source={item.image} style={[styles.image,imageStyle]} />
                    <View style={[styles.textContainer,textContainerStyle]}>
                    <Text style={[styles.title,titleStyle]}>{item.title}</Text>
                        {( VisibleSub &&
                            <View>
                                
                        <Text style={[styles.decribe,subStyle]}>{item.describe}</Text>
                        <Text style={[styles.decribe,subLastStyle]}>{item.offer}</Text>
                            </View>
                        )}
                        <TouchableOpacity style={[styles.buttonBox,buttonBoxStyle]}>
                            <Text style={[styles.btnText,buttonTextStyle]}>{item.button}</Text>
                        </TouchableOpacity>
                    </View>
                    {Visible && (<View style={[styles.iconBox,iconBoxStyle]}>
                        <Image source={item.icon} style={[styles.icon,iconStyle]}/>
                    </View>)}

                </View>
            </View>
        )
    }
    return (
        <FlatList
            data={data}
            renderItem={renterItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[styles.container,flatContainer]}
            showsVerticalScrollIndicator={false}
            numColumns={numColumns}
        />
    )
}

const styles = StyleSheet.create({})