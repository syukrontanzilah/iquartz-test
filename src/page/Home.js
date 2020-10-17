import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native'
import { Fonts } from '../utils/Fonts'
import { IconChat, IconChatActive } from '../assets'
import {Header, Map, Tab, ListTech} from '../component'
import { colors } from '../utils'

const Home = ({navigation}) => {
    return (
        <View style={styles.home}>
            <Header />
        <ScrollView
        showsVerticalScrollIndicator={false}
        >
        <Map/>
        <Tab/>

        <View style={styles.list}>
            <ListTech
            onPress={()=> navigation.navigate("Service")}
            />
            <ListTech/>
            <ListTech/>
            <ListTech/>
            <ListTech/>
            <ListTech/>
        </View>
            {/* <Button title="Login"onPress={()=> navigation.navigate("Login")}/> */}
        </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    home: {
        flex:1,
        backgroundColor: colors.orange
    },
    list :{
        paddingHorizontal:20,
        paddingVertical:15
    }

})

