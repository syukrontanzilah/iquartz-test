import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Fonts } from '../utils/Fonts'
import { IconChat, IconChatActive } from '../assets'

const Home = ({navigation}) => {
    return (
        <View>
            <Text>home page</Text>
            <Text>Login</Text>
            <Button title="Login"onPress={()=> navigation.navigate("Login")}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

