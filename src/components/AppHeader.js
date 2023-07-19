import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'

const AppHeader = () => {
    return (
        <SafeAreaView style={AppStyle.header}>
            <Image style={AppStyle.avatar} source={require('../assets/images/logo.jpg')} />
        </SafeAreaView>
    )
}

export default AppHeader

const styles = StyleSheet.create({})