import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/utils/AppContext'
import BottomTabs from './src/navigation/BottomNav';
import Test from './src/test/TestModal';


const App = () => {
  
  return (
    <AppContextProvider>
      <NavigationContainer>
        <BottomTabs />
        {/* <Test /> */}
      </NavigationContainer>
    </AppContextProvider>
  )
}
export default App
