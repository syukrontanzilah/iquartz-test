import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Fonts } from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons'



const Tab = () => {
    return (
        <View style={styles.container}>
           <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
               <Ionicons color="white" name="heart"/>
            <Text style={styles.title}>Service</Text>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
           <Ionicons color="white" name="heart"/>
            <Text style={styles.title}>Air Con</Text>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
           <Ionicons color="white" name="heart"/>
            <Text style={styles.title}>Plumbing</Text>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={0.5} style={styles.tab}>
           <Ionicons color="white" name="heart"/>
            <Text style={styles.title}>Electrical</Text>
           </TouchableOpacity>
        </View>
    )
}

export default Tab

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:40
    },
    tab:{
        backgroundColor:'#474747',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    title:{
        color:'white',
        fontFamily: Fonts.regular,
        fontSize:14,
        marginLeft:5
    }
})
