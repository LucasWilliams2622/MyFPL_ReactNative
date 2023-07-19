import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import AppHeader from '../components/AppHeader'

const Home = () => {
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})