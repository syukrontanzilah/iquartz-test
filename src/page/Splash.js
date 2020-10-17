import React, {useEffect} from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    StatusBar 
} from 'react-native'
import { colors, Fonts } from '../utils'
import { ImgLogo } from '../assets'

const Splash = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
        navigation.replace("Login")
        }, 2000)
    })
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={colors.black}/>
            <Image source={ImgLogo} style={styles.image}/>
            <Text style={styles.title}>IQ<Text style={{color:'gray'}}>basic</Text></Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.black,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:100,
        width:100
    },
    title:{
        fontSize:30,
        fontFamily: Fonts.bold,
        color: 'white',

    }
})
