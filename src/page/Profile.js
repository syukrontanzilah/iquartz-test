import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, Fonts } from '../utils'
import { ImgPerson2 } from '../assets'
import { Header } from '../component';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Data = ({label, desc}) => {
    return(
         <View style={styles.data}>
        <View style={{width:'35%'}}>
    <Text style={styles.dataInfo}>{label}</Text>
        </View>
        <View style={{flex:1}}>
    <Text style={styles.dataInfo}>{desc}</Text>
        </View>
    </View>
    )
}

const Profile = () => {
    return (
        <View style={styles.page}>
            <Header/>
            <View style={{flex:1, padding:20}}>
            <View style={styles.head}>
            <Text style={styles.profile}>My Profile</Text>
            <Image style={styles.avatar} source={ImgPerson2}/>
            </View>

            <View style={styles.content}>
                <Text style={styles.personal}>Personal Information</Text>
                <View style={{marginTop:20}}>
                <Data 
                label="User ID"
                desc="WKI"
                />
                <Data 
                label="Name"
                desc="Ahmad Furqon"
                />  
                <Data
                label="Password"
                desc="*********"
                />
                <Data
                label="Phone"
                desc="08123456789"
                />
                <Data
                label="Email"
                desc="furqon@gmail.com"
                />
                <Data
                label="Adress"
                desc ="Jl.Pos Pengumben No. 56, Jakarta Barat"
                />
                </View>

                    <TouchableOpacity style={styles.edit}>
                        <Ionicons name="pencil" size={20} color="white"/>
                    </TouchableOpacity>
             
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor: colors.orange,
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    profile:{
        fontSize:20,
        fontFamily:Fonts.bold,
        color:'white'
    },
    avatar:{
        height:50,
        width:50,
        borderRadius:50/2
    },
    content:{
        flex:1,
        backgroundColor:'white',
        borderRadius:15,
        marginTop:10,
        padding:20
    },
    personal:{
        fontSize:20, 
        fontFamily: Fonts.bold
    },
    data:{
        flexDirection:'row',
        marginBottom:5
    },
    dataInfo:{
        fontSize:16,
        fontFamily: Fonts.regular,
    },
    edit: {
        backgroundColor: colors.blue,
        height:50,
        width:50,
        borderRadius:50/2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:10,
        right:10
    }
})
