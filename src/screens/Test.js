import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ICON, COLOR } from '../../constants/Themes'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Test = () => {

  useEffect(() => {
    GoogleSignin.configure({ webClientId: '325734138709-fqqf46vstodpaarhm4f0qtchc0bcitjd.apps.googleusercontent.com' });

  }, [])

  //login gg
  const signInGG = async () => {
    try {
        console.log("aaaaaa");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Id: ', userInfo.user.id);
      console.log('Email: ', userInfo.user.email);
      console.log('Name: ', userInfo.user.name);
      console.log('FamilyName: ', userInfo.user.familyName);
      console.log('GivenName: ', userInfo.user.givenName);
      console.log('Photo: ', userInfo.user.photo);
      setInfoUser({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>

      <TouchableOpacity style={styles.center} onPress={() => { signInGG(); }}>
        <View style={styles.viewLoginGG}>
          <Image style={styles.imageLoginGG} source={require('../assets/icons/Google.png')}></Image>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  imageLoginGG: {
    height: 30,
    width: 30
  },
  viewLoginGG: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 20,
    marginBottom: 5
  }
})