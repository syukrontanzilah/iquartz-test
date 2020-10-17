import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { ImgMap, ImgGoogle } from '../../assets'
import { Fonts } from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Gap } from '../atom';

const Map = () => {
    return (
        <ImageBackground source={ImgMap} style={styles.container}>
            <View style={styles.topInfo}>
                 <View style={styles.mapInfo}>
           <View style={styles.mapInfoWrap}>
           <Text style={styles.mapSearch}>Map</Text>
           </View>
           <View style={styles.mapInfoWrap}>
           <Text style={styles.satelite}>Satelite</Text>
           </View>
       </View>
            <View style={styles.iconWrap}>
             <Ionicons name="expand" size={25} color="gray"/>
            </View>
            </View>
            
        <View style={styles.bottomInfo}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconWrap}>
        <Ionicons name="add" size={25} color="gray"/>
            </TouchableOpacity>  
            <Gap height={0}/>
            <TouchableOpacity activeOpacity={0.8}  style={styles.iconWrap}>
            <Ionicons name="remove" size={25} color="gray"/>
            </TouchableOpacity>
        </View>
     
     <View style={styles.googleWrap}>
<Image style={styles.google} source={ImgGoogle}/>
     </View>
        </ImageBackground>
    )
}

export default Map

const styles = StyleSheet.create({
    container:{
        height:350,
        backgroundColor:'white',
        width:'100%',
        
    },
    topInfo:{
        justifyContent:'space-between', 
        flexDirection:'row',
        padding:10
    },
    mapInfo:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'60%',
        height:40,
        borderRadius:2,
        elevation:3
    },
    mapInfoWrap:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    mapSearch:{
        fontFamily: Fonts.bold,
        fontSize: 18,

    },
    satelite:{
        fontFamily: Fonts.regular,
        fontSize:18,
        color: 'gray'
    },
    iconWrap:{
        backgroundColor:'white',
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2,
        elevation:3
    },
    bottomInfo:{
       position:'absolute',
       right:10,
       bottom:10
    },
    googleWrap:{
        position:'absolute',
        bottom:5,
        left:10,
        opacity:0.9
    },
    google:{
        width:70,
        height:23
    }
 

})
