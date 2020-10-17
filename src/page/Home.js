import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, ListTech, Map, Tab } from '../component'
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
            <ListTech color="red"/>
            <ListTech color={colors.blue}/>
            <ListTech color={colors.yellow}/>
            <ListTech color="red"/>
            <ListTech/>
        </View>
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

