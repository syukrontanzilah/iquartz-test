import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ImgPerson } from '../../assets'
import { Fonts } from '../../utils'

const ListBooking = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
            source={ImgPerson}/>

            <View style={styles.information}>
            <Text style={styles.desc}>Job:MS-2006-0006. Date: 12/6/2020 9:53:57</Text>
            <Text style={styles.desc}>Visit Cost: $6.5</Text>
            <Text style={styles.desc}>Additional cost: $10</Text>
            <Text style={styles.desc}>Paid amount: $0</Text>
            <Text style={styles.desc}>Status: Pending visit payment</Text>
            </View>
        </View>
    )
}

export default ListBooking

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:10,
        elevation:2,
        flexDirection:'row',
        padding:10,
        marginBottom:10
    },
    image:{
        height:40,
        width:40,
        borderRadius:40/2
    },
    information:{
        marginLeft:15
    },
    desc:{
        fontSize:16,
        fontFamily: Fonts.regular
    }
})
