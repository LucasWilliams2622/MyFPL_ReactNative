import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import ItemDetail from '../components/New/ItemDetail'

const DetailsNew = () => {
  return (
    <View style={[AppStyle.container, { padding: 16 }]}>
      <View style={[AppStyle.row]}>
        <Image source={require('../assets/icons/ic_back_black.png')}/>
        <Text style={[AppStyle.titleMedium]}> Chi tiết</Text>
      </View>
      <Text style={[AppStyle.titleBig, {marginTop:10}]}>Thay đổi thời gian học kì Summer 2023</Text>
      <ItemDetail/>
    </View>
  )
}

export default DetailsNew

const styles = StyleSheet.create({})