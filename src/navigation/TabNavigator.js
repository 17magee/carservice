import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/screens/Home';
import Offers from '../components/screens/Offers';
import Services from '../components/screens/Services';
import Booking from '../components/screens/Booking';
import { AppColor } from '../constants/AppColors';
import { TouchableOpacity,StyleSheet,View,Image, Text } from 'react-native';
import { Plus } from '../assets/images';
import { AppFontSize, AppFontWeight } from '../constants/AppFonts';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity activeOpacity={.9}
    style={styles.centerButton}
    onPress={onPress}
  >
    <View style={styles.centerButtonInner}>
      <Image
        source={Plus}
        style={styles.centerImage}
        resizeMode="contain"
      />
      
    </View>
  </TouchableOpacity>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          }
           else if (route.name === 'Offer') {
            iconName = 'gift-outline';
          } 
          else if (route.name === 'Service') {
            iconName = 'construct-outline';
          } else if (route.name === 'Booking') {
            iconName = 'file-tray-full-outline';
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
          
        },
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarStyle:{
            backgroundColor : AppColor.primary,
            position : 'absolute',
            bottom : hp(2),
            height : hp(10),
            elevation : 5,
            width : wp(90),
            marginLeft : wp(5),
            paddingTop: hp(2),
            borderRadius : wp(4)
        }
       
      })}
    >
    
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Offer" component={Offers} />
      <Tab.Screen
        name="Book"
        component={() => <View />}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen name="Service" component={Services} />
      <Tab.Screen name="Booking" component={Booking} />
    </Tab.Navigator>
    
  );
}

  const styles = StyleSheet.create({
    centerButton: {
    top: -hp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonInner: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    borderWidth : 3,
    borderColor : AppColor.primary
  },
  centerImage: {
    width: wp(12),
    height: wp(12),
  },
  
  })