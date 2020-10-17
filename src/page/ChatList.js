import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, ListChat } from '../component'
import { ImgPerson, ImgPerson2, ImgPerson3 } from '../assets'
import { colors, Fonts } from '../utils'

const ChatList = ({navigation}) => {
const [chat] = useState([
    {
        id:1,
        name: 'Dr. Idrus',
        date: '9.56 PM',
        url: ImgPerson
    },
    {
        id:2,
        name: 'Revalina Hamidah',
        date: '8.50 PM',
        url: ImgPerson2
    },
    {
        id:3,
        name: 'Alissa',
        date: '12.00 AM',
        url: ImgPerson3
    }

])
    return (
        <View style={styles.page}>
            <Header/>
            <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.chatList}>
            <Text style={styles.chat}>CHATS</Text>
            {
                chat.map(chats => {
                    return <ListChat
                    key={chats.id}
                    name={chats.name}
                    avatar={chats.url}
                    date={chats.date}
                    onPress = {()=> navigation.navigate('Chat', chats)}
                    />
                })
            }
            </ScrollView>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: colors.orange
    },
    chat:{
        fontSize:20,
        color:'white',
        alignSelf:'center',
        paddingVertical:20,
        fontFamily: Fonts.bold
    },
    chatList:{
        paddingHorizontal:20,
    }
})
