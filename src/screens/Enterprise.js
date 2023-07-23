import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'

const Enterprise = () => {
  return (
   <SafeAreaView style={styles.BoxContent} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}></SafeAreaView>
  )
}

export default Enterprise
const styles = StyleSheet.create({
  BoxContent: {
    backgroundColor: COLOR.background4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    height: '100%',
    width: '100%',

    paddingHorizontal: 16,
    paddingVertical: 20,
  },

})