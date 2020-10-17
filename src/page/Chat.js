import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback } from 'react-native'
import { colors, Fonts } from '../utils'
import { Header } from '../component';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ImgPerson3 } from '../assets';

const Chat = ({navigation, route}) => {
    const data = route.params
    return (
        <TouchableWithoutFeedback
        onPress={() => { Keyboard.dismiss() }}
        >
            <View  style={styles.chat}>
            <Header/>
            <View style={styles.chatContent}>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={()=> {navigation.goBack()}}
                    >
                    <Ionicons name="chevron-back-outline" size={35} color="gray"/>
                    </TouchableOpacity>
                    <Image style={styles.avatar} source={data.url}/>
                    <View>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.online}>Online</Text>
                    </View>
                </View>
                <ScrollView style={styles.chatArea}>

                </ScrollView>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="add" size={35} color="gray"/>
                </TouchableOpacity>
                <View style={styles.inputWrap}>
                <TextInput
                placeholder={`Text to ${data.name}`}
                style={styles.input}/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="send" size={30} color="gray"/>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Chat

const styles = StyleSheet.create({
    chat:{
        flex:1,
        backgroundColor:colors.orange
    },
    chatContent:{
        backgroundColor:'white',
        flex:1,
        margin:15,
        borderRadius:10
    },
    header:{
        backgroundColor:colors.lightgray,
        height:60,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        height:40,
        width:40,
        borderRadius:40/2,
        marginRight:10
    },
    name:{
        fontFamily: Fonts.bold,
        fontSize:18,
        color: '#474747'
    },
    online:{
        fontFamily: Fonts.regular,
        fontSize:15,
        color: '#474747'
    },
    chatArea:{
        flex:1,
        backgroundColor:'white'
    },
    footer:{
        backgroundColor: colors.lightgray,
        height:60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10,
        flexDirection:'row',
        alignItems:'center'
    },
    inputWrap:{
        flex:1,
        borderRadius:10,
        backgroundColor:'white',
        height:40
    },
    input:{
        paddingHorizontal:10,
        fontSize:18,
        fontFamily: Fonts.regular,
        color: '#474747',
    },
    button:{
        paddingHorizontal:8
    }
})
