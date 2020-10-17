import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
    Splash, 
    Booking, 
    Chat, 
    ChatList, 
    Home, 
    Login, 
    Profile, 
    Service 
} from '../page';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const MainApp = () => {
    return (
        <Tab.Navigator
        tabBar={props => <BottomNavigator {...props}/>}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="ChatList" component={ChatList}/>
            <Tab.Screen name="Booking" component ={Booking}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
       <Stack.Navigator
       initialRouteName="Splash"
       screenOptions ={{
           headerShown: false,
           cardStyleInterpolator: forFade
       }}
       >
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Splash" component={Splash}/>
       <Stack.Screen name="Chat" component={Chat} />
       <Stack.Screen name="MainApp" component={MainApp}/>
       <Stack.Screen name="Service" component={Service}/>
       </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
