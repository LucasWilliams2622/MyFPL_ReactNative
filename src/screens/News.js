import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import AppHeader from '../components/AppHeader'

const News = () => {
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
    </SafeAreaView>
  )
}

export default News

const styles = StyleSheet.create({

})