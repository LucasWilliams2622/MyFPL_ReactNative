import { StyleSheet, Text, View, Image, } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ICON, COLOR } from '../constants/Theme'
import * as Animatable from 'react-native-animatable';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import Schedule from '../screens/Schedule';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackBegin = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
const StackHome = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />

        </Stack.Navigator>
    )
}
const StackProfile = () => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>
    )
}
const StackNotification = () => {
    return (
        <Stack.Navigator initialRouteName="Notification" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Notification" component={Notification} />

        </Stack.Navigator>
    )
}
const StackSchedule = () => {
    return (
        <Stack.Navigator initialRouteName="Schedule" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Schedule" component={Schedule} />

        </Stack.Navigator>
    )
}
const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="StackHome"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, label, size }) => {
                        let iconName = focused
                        if (route.name === 'StackHome') {
                            iconName = focused ? ICON.HomeFocus : ICON.Home
                            label = 'Trang chủ'
                        } else if (route.name === 'StackSchedule') {
                            iconName = focused ? ICON.ScheduleFocus : ICON.Schedule;
                            label = 'Lịch'
                        } else if (route.name === 'StackNotification') {
                            iconName = focused ? ICON.NotificationFocus : ICON.Notification;
                            label = 'Thông báo'
                        }
                        else if (route.name === 'StackProfile') {
                            iconName = focused ? ICON.ProfileFocus : ICON.Profile;
                            label = 'Hồ sơ'
                        }
                        // You can return any component that you like here!
                        return <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 60
                        }}>

                            <Animatable.View
                                animation="zoomIn"
                                duration={2000}>
                                <Image source={iconName}
                                    style={{
                                        width: focused ? 30 : 24,
                                        height: focused ? 30 : 24,

                                        resizeMode: 'stretch',
                                        tintColor: focused ? COLOR.focus : COLOR.notFocus,
                                    }} />
                            </Animatable.View>
                            <Text style={{
                                fontSize: focused ? 10 : 0,
                                marginTop: 4,
                                color: focused ? COLOR.focus : COLOR.notFocus,

                            }}>{label}</Text>
                        </View>;
                    },

                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 70,
                        position: 'absolute',
                        backgroundColor: COLOR.background,
                        bottom: 10,
                        right: 10,
                        left: 10,
                        borderRadius: 20,

                    },
                })}
        >
            <Tab.Screen name="StackHome" component={StackHome} />
            <Tab.Screen name="StackSchedule" component={StackSchedule} />
            <Tab.Screen name="StackNotification" component={StackNotification} />
            <Tab.Screen name="StackProfile" component={StackProfile} />
        </Tab.Navigator>
    )
}
const BottomTabNav = () => {
    const [isLogin, setfirst] = useState(true)
    // const { isLogin, infoUser } = useContext(AppContext);
    // console.log("isLogin Bottom Tabs=================>", isLogin);
    // console.log("infoUser Bottom Tabs=========>", infoUser);
    return (
        <>
            {
                isLogin == false ? <StackBegin /> : <Main />
            }
        </>)
}
//ADMIN
export default BottomTabNav

const styles = StyleSheet.create({})