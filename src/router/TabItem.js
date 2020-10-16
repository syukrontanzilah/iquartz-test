import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Fonts, colors,} from '../utils'
import { IconHomeActive, IconHome, IconChat, IconChatActive, IconListActive, IconList, IconProfileActive, IconProfile } from '../assets'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Home'){
            return active ? <IconHomeActive/> : 
           <IconHome/>
           
        }
        if (title === 'Chat'){
            return active ? <IconChatActive/> : 
           <IconChat/>
           
        }
        if (title === 'Booking'){
            return active ? <IconListActive/> : 
          <IconList/>
           
        }
        if (title === 'Profile'){
            return active ? <IconProfileActive/> : 
          <IconProfile/>
           
        }

        return < IconHome />
    }


    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress ={onLongPress}>
       <Icon/> 
        {/* <Text style={styles.text(active)}>{title}</Text> */}
    </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    text : (active) => (
        {
        fontSize:11,
        color: active ? colors.orange : colors.lightgray,
        fontFamily : Fonts.regular
        

    })
})