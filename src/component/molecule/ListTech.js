import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImgPerson } from '../../assets';
import { Fonts } from '../../utils';

const ListTech = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=> navigation.navigate("Service")}
        activeOpacity={0.8} style={[styles.container, {
            borderLeftColor: props.color,
        }]}>
            <View style={styles.left}>
              <View style={styles.avatar}>
                <Image style={styles.photo} source={ImgPerson}/>
              </View>
            </View>
            <View style={styles.information}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={styles.name}>Name, Distance </Text>
                <View style={styles.star}>
                    <Ionicons name="star" color="#474747"/>
                    <Ionicons name="star" color="#474747"/>
                    <Ionicons name="star" color="#474747"/>
                    <Ionicons name="star" color="#474747"/>
                    <Ionicons name="star-half" color="#474747"/>
                </View>
                </View>
                <Text style={styles.desc}>Type of Service</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.price}>$/Free</Text>
            </View>
            <View style={styles.iconRight}>
                <Ionicons name="information-circle" size={18} color='#474747'/>
            </View>
        </TouchableOpacity>
    )
}

export default ListTech

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:5,
        borderLeftWidth:10,
        marginBottom: 5,
    },
    left:{
       paddingHorizontal:10
    },
    avatar:{
        height:45,
        width:45,
        backgroundColor:'wheat',
        borderRadius:45/2,

    },
    photo:{
        height:undefined,
        width:undefined,
        flex:1,
        resizeMode:'cover',
        borderRadius: 45/2
    },
    information:{
        flex:1,
        justifyContent:'center'
    },
    name: {
        fontFamily: Fonts.regular,
        fontSize:16,
        color: '#474747'
    },
    desc: {
        fontFamily: Fonts.regular,
        fontSize:14,
        color:'gray'
    },
    star:{ 
        flexDirection:'row'
    },
    right:{
        justifyContent:'center'
    },
    price: {
        fontSize:16,
        fontFamily: Fonts.bold
    },
    iconRight:{
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10
    }
})
