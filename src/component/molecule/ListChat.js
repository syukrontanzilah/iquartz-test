import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, Fonts } from '../../utils'

const ListChat = ({avatar, name, date, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.container}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.contactWrap}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>1 Hours ago</Text>
            </View>
            <Text style={styles.desc}>{date}</Text>
        </TouchableOpacity>
    )
}

export default ListChat

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        borderRadius:5,
        flexDirection:'row',
        marginBottom:10,
        padding:10
    },
    avatar:{
        height:45,
        width:45,
        backgroundColor:colors.lightgray,
        borderRadius:45/2,
        marginRight:10
    },
    contactWrap:{
        flex:1,
        justifyContent:'center'
    },
    name:{
        fontSize:18,
        fontFamily: Fonts.bold,
    },
    desc:{
        fontSize:12,
        fontFamily: Fonts.regular,
        color:'gray'
    }
})
