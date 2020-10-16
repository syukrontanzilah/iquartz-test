import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../utils/Fonts'
import { IconChat, IconChatActive } from '../assets'

const Home = () => {
    return (
        <View>
            <IconChatActive/>
            <Text style={{fontFamily: Fonts.regular, fontSize:20}}>Home page nih yah</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

