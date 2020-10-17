import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { colors, Fonts } from '../utils'
import { Header, ListBooking, Gap } from '../component'

const Booking = () => {
    return (
        <View style={styles.page}>
            <Header/>
            <Text style={styles.titlePage}>Bookings</Text>
            <View style={styles.tab}>
            <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>Pending Acceptance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>Job Acceptance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>Pending Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
            <Text style={styles.tabText}>Job Completed</Text>
            </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#474747'}}>
                <Text style={styles.tabText}>All Bookings</Text>
            </View>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <ListBooking/>
            <ListBooking/>
            <ListBooking/>
            <ListBooking/>
            <ListBooking/>
            <ListBooking/>
            <ListBooking/>
            <Gap height={20}/>
            </ScrollView>
        </View>
    )
}

export default Booking

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: colors.orange
    },
    titlePage: {
        color: 'white',
        fontSize:20,
        fontFamily: Fonts.bold,
        textAlign:'center',
        paddingVertical:15
    },
    tab: {
        flexDirection:'row',
        backgroundColor: colors.blue
    },
    tabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    tabText:{
        textAlign:'center',
        color:'white',
        padding:10,
        fontSize:16,
        fontFamily: Fonts.regular
    },
    scroll:{
        padding:15,
    }
})
