import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native'
import {Input, Gap, Button} from '../component'
import { colors, Fonts } from '../utils'
import { ImgLogo } from '../assets'

const Login = () => {
    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.login}>
            <StatusBar backgroundColor={colors.black}/>
            <View style={styles.wrapLogo}>
                <Image style={styles.logo} source={ImgLogo}/>
                <Text style={styles.textLogo}>IQ<Text style={{color: colors.orange}}>basic</Text></Text>
            </View>
            <View>
               <Input placeholder="Username"/>
            <Gap height={10}/>
            <Input placeholder="Password"/>
            <Text style={styles.forgot}>Forgot your Password ?</Text>
            <Gap height={10}/>
            <Button title="Login"/>
            </View>

            <Gap height={40}/>
           
            <View>
            <Input placeholder="Email"/>
            <Gap height={8}/>

            <Input placeholder="username"/>
            <Gap height={8}/>

            <Input placeholder="Password"/>
            <Gap height={8}/>

            <Input placeholder="Phone Number"/>
            <Gap height={20}/>

            <Button title="Create"/>
            <Gap height={20}/>

            </View>
         

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    login: {
        backgroundColor: colors.black,
        paddingHorizontal:30,
        flex:1

    },
    wrapLogo:{
        width:80,
        height:80, 
        justifyContent:'center', 
        alignItems:'center',
        marginBottom:40,
        marginTop:20

    },
    logo:{
        width: 70,
        height:70,
    },
    textLogo:{
        color: 'white',
        fontSize:20,
        fontFamily: Fonts.regular
    },
    forgot: {
        color:colors.lightgray,
        fontFamily: Fonts.regular,
        marginTop:5
    }
})
