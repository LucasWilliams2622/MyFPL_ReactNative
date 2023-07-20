import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import AppHeader from '../components/AppHeader'
import ItemNews from '../components/ItemNews'

const Home = () => {
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
      <ItemNews/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})