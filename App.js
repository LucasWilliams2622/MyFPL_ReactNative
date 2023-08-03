import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/utils/AppContext'
import BottomTabs from './src/navigation/BottomNav';
import Test from './src/test/TesTMap';
import Testloing from './src/screens/Test'
import VideoCall from './src/screens/VideoCall/VideoCall';


const App = () => {
  
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <BottomTabs />
    //     {/* <Test /> */}
    //   </NavigationContainer>
    // </AppContextProvider>
    <SafeAreaView style={{flex:1}}>
     <VideoCall/>
    </SafeAreaView>
  )
}
export default App
