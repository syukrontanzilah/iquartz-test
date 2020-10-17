import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native'
import {Input, Gap, Button} from '../component'
import { colors, Fonts } from '../utils'
import { ImgLogo } from '../assets'

const Login = ({navigation}) => {
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
            <Button
            onPress={()=> navigation.replace('MainApp')}
            title="Login"/>
            </View>
            {/* <Gap height={40}/> */}

            <View style={{
                flexDirection:'row', 
                paddingTop:20, 
                paddingBottom:25}}>
                <View style={styles.line}/>
                <Text style={{
                    paddingHorizontal:20, 
                    fontSize:18, 
                    color:'gray', 
                    marginBottom:-5
                    }}>Or</Text>
                <View style={styles.line}/>
            </View>
           
            <View>
            <Input placeholder="Email"/>
            <Gap height={10}/>
            <Input placeholder="username"/>
            <Gap height={10}/>
            <Input placeholder="Password"/>
            <Gap height={10}/>
            <Input placeholder="Phone Number"/>
            <Gap height={20}/>
            <Button
            onPress={()=> navigation.replace('MainApp')}
            title="Create"/>
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
    },
    line:{
        flex:1, 
        borderBottomColor:'gray', 
        borderBottomWidth:1
    }
})
