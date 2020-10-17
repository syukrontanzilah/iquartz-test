import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, Fonts } from '../../utils'

const Button = ({title, onPress}) => {
    return (
       <TouchableOpacity 
       onPress={onPress}
       activeOpacity={0.7}
       style={styles.container}>
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.orange,
        justifyContent:'center',
        alignItems:'center',
        padding:10,

    },
    title: {
        color: 'white',
        fontFamily: Fonts.bold,
        fontSize:18,
        textTransform:'uppercase'
    }
})

