import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../utils'
import { Header } from '../component'

const Booking = () => {
    return (
        <View style={styles.page}>
            <Header/>
            <Text>Booking</Text>
        </View>
    )
}

export default Booking

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: colors.orange
    }
})
