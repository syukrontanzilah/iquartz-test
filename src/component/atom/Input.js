import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, Fonts } from '../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable, placeholder }) => {
    const [border, setBorder] = useState(colors.lightgray);
    const onFocusForm = () => {
        setBorder(colors.yellow)
    }
    const onBlurForm = () => {
        setBorder('white')
    };
    return (
        <View style={styles.wrap}>
        {/* <Text style={styles.label}>{label}</Text> */}
        <TextInput 
        onFocus={onFocusForm} 
        onBlur={onBlurForm} 
        style={styles.input(border)}
        value ={value}
        onChangeText={onChangeText}
        secureTextEntry= {secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        placeholder={placeholder}
        />
    </View>
    )
}

export default Input

const styles = StyleSheet.create({
    wrap: {
    },
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 0,
        padding: 10,
        fontSize:18,
        fontFamily: Fonts.regular,
        color: colors.orange,
        backgroundColor: 'white',
    
    }),
})
