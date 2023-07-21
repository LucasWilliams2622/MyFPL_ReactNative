import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { AppStyle } from '../../constants/AppStyle'
import { styleAppHeader } from './StyleAppHeader'

const AppHeader = () => {
    return (
        <SafeAreaView style={AppStyle.header}>
            <View style={styleAppHeader.logo}><Image style={styleAppHeader.imgLogo}  source={require('../../assets/images/logo.jpg')} /></View>
            <View style={styleAppHeader.headerAvatar}>
                <Image style={AppStyle.avatar} source={require('../../assets/icons/batman_avatar_icon.png')}/>
                <View style={styleAppHeader.viewTitleName}>
                    <Text style ={styleAppHeader.titleName}>NGUYỄN VĂN  AA</Text>
                    <Text style ={styleAppHeader.titleName}>PS36236</Text>
                </View>
                
                <Image style={AppStyle.avatar} source={require('../../assets/icons/logo_icon.png')}/>               
            </View>
            <View style={styleAppHeader.view1}></View>
            <View style={styleAppHeader.rightBottomIcon}>
                <Image style={styleAppHeader.notificationIcon} source={require('../../assets/icons/qr_code_icon.png')}/>
                <Image style={styleAppHeader.qrCodeIcon} source={require('../../assets/icons/notification_icon.png')}/>
            </View>
        
        </SafeAreaView>
    )
}

export default AppHeader

const styles = StyleSheet.create({})