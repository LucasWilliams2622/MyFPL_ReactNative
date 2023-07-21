import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import AppHeader from '../components/appHeaders/AppHeader'
import ItemHome from '../components/itemHomes/ItemHome'

const Home = () => {
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
      <ItemHome/>
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})