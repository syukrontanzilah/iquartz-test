import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {Header, Button, Gap} from '../component'
import { colors, Fonts } from '../utils'
import { ImgPerson } from '../assets'
import Ionicons from 'react-native-vector-icons/Ionicons'

const List = () => {
    return (
        <View style={styles.list}>
            <Text style={styles.desc}>Good work! No mess</Text>
            <View style={styles.right}>
            <Ionicons name="star" color="gray" />
            <Ionicons name="star" color="gray"/>
            <Ionicons name="star" color="gray"/>
            <Ionicons name="star" color="gray"/>
            <Ionicons name="star-half" color="gray"/>
            </View>
             <Text style={styles.sender}>3 days ago - Hamidah Alfi</Text>
        </View>
    )
}

const Service = ({}) => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <View style={styles.profile}>
            <View style={styles.left}>
                <Image source={ImgPerson} style={styles.avatar}/>
            </View>
            <View style={styles.center}>
                <Text style={styles.name}>Mr. Abdullah Idrus</Text>
                <Text style={styles.type}>Type of service: Professional Mecanical Engineering</Text>
                <Text style={styles.address}>
                Transport Allowence: $0
                Labour Cost: $0/hr
                Tools & Parts: Negotiable
                </Text>
            <Gap height={20}/>
            <Button title="book now"/>
            </View>

            <View style={styles.right}>
            <Ionicons name="star" color="yellow"/>
            <Ionicons name="star" color="yellow"/>
            <Ionicons name="star" color="yellow"/>
            <Ionicons name="star" color="yellow"/>
            <Ionicons name="star-half" color="yellow"/>
            </View>
                </View>

            <View style={styles.ratingAndReview}>
            <View style={{justifyContent:'space-between', flexDirection:'row'}}>
            <Text style={styles.titleHead}>Rating & Reviews</Text>
            <Text style={styles.seeAll}>See All</Text>
            </View>

                <View style={{flexDirection:'row', alignItems:'flex-end',}}>
                <Text style={styles.numbRating}>4.2</Text>
                <Text style={styles.desc}> Out of 5 Total: 627 Ratings</Text>
                </View>
                <Gap height={20}/>
                <View>
                <List/>
                <List/>
                <List/>
                </View>
                </View>
        </ScrollView>

            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.tab}>
                <Text style={styles.label}>Online</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <Text style={styles.label}>Offline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                <Text style={styles.labelActive}>Job in Progress</Text>
                </TouchableOpacity>
            </View>    
                    </View>
    )
}

export default Service

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        // height:300,
        backgroundColor: colors.blue,
        flexDirection:'row',
        padding:20
    },
    left:{
        // backgroundColor:'wheat'
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100/2
    },
    center: {
        flex:1,
        // backgroundColor:'red',
        marginLeft:10
    },
    name: {
        fontSize:20,
        fontFamily:Fonts.bold,
        color: 'white'
    },
    type:{
        fontSize:16,
        fontFamily:Fonts.regular,
        color: 'white'
    },
    address:{
        fontSize:16,
        fontFamily:Fonts.regular,
        color: 'white',
        marginTop:20
    },
    right:{
        flexDirection:'row'
    },
    ratingAndReview:{
        padding:20
    },
    titleHead:{
        color: colors.black,
        fontSize:20,
        fontFamily:Fonts.bold,
    },
    seeAll:{
        color: colors.orange,
        fontSize:16,
        fontFamily:Fonts.regular,
    },
    numbRating:{
        fontFamily: Fonts.bold,
        color: colors.orange,
        fontSize:40,
        marginBottom:-5
    },
    desc:{
        color: colors.black,
        fontSize:16,
        fontFamily:Fonts.regular,
    },
    list:{
        backgroundColor:'#dfdfdf',
        marginBottom:10,
        padding:10
    },
    sender:{
        color: 'gray',
        fontSize:14,
        fontFamily:Fonts.regular,
    },
    bottomTab:{
        backgroundColor: colors.blue,
        // justifyContent:'space-between',
        flexDirection:'row',
        height:50,
        // paddingHorizontal:25
    },
    tab:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    label:{
        color:'white',
        fontSize:18,
        fontFamily:Fonts.regular,
    },
    labelActive:{
        color:colors.yellow,
        fontSize:18,
        fontFamily:Fonts.italic,
    }
})
