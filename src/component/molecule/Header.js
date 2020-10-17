import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { ImgLogo } from '../../assets'
import { Fonts, colors } from '../../utils'

const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.black}/>
            <View style={styles.logoWrap}>
             <Image style={styles.img} source={ImgLogo}/>
            <Text style={styles.logoText}>iQ<Text style={{color: 'gray'}}>basic</Text></Text>
            </View>
           
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:8
    },
    logoWrap:{
        flexDirection:'row',
        alignItems:'center'
    },
    img: {
        height:25,
        width:25,
    },
    logoText:{
        color:'white',
        fontFamily: Fonts.regular,
        marginLeft:5,
        fontSize:18
    }
})
