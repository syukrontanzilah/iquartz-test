import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ImgPerson } from '../../assets';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Fonts } from '../../utils';

const ListTech = ({onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8} style={styles.container}>
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
                <Ionicons name="information-circle" size={18}/>
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
        borderLeftColor: 'red',
        borderLeftWidth:10,
        marginBottom: 5
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
