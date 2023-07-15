import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/Theme'
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/ban_tin.png')} />

      {/* <LinearGradient 
       start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
       locations={[0,0.5,0.6]}
       colors={['#4c669f', '#3b5998', '#192f6a']}
       style={styles.linearGradient}>
        <Image style={styles.image} source={require('../assets/images/ban_tin.png')} />
      </LinearGradient > */}

      <View style={styles.boxLogin}>

      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  image: {
    width: '100%',
    height: '60%'
  },
  boxLogin: {
    backgroundColor: COLOR.background,
    borderWidth: 1,
    borderColor: COLOR.white,
    height: '30%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    top: -160,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9
  }
})