import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/utils/AppContext'
import BottomTabs from './src/navigation/BottomNav';
const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
         <BottomTabs/>
      </NavigationContainer>
    </AppContextProvider>
  )
}
// hungtq đẫ test
export default App
