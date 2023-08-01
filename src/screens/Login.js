import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { COLOR } from '../constants/Theme'
import LinearGradient from 'react-native-linear-gradient';
import { AppStyle } from '../constants/AppStyle';
import { Dropdown } from 'react-native-element-dropdown';
import AxiosInstance from '../constants/AxiosInstance';
import { AppContext } from '../utils/AppContext';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const dataLocation = [
  { labelLocation: 'Cơ sở Hồ Chí Minh', valueLocation: '1' },
  { labelLocation: 'Cơ sở Hà Nội', valueLocation: '2' },
  { labelLocation: 'Cơ sở Cần Thơ', valueLocation: '3' },
  { labelLocation: 'Cơ sở Đà Nẵng', valueLocation: '4' },

];
const Login = () => {
  const [value, setValue] = useState(null);
  const [userInfo, setuserInfo] = useState(null)
  const [isFocus, setIsFocus] = useState(false);
  const { isLogin, setIsLogin, setInfoUser, setIdUser } = useContext(AppContext);
  useEffect(() => {
    GoogleSignin.configure({ webClientId: '203283551475-ogvoc8nku450g54posg3esufgds86ht0.apps.googleusercontent.com' });
  }, [])
  const signInGoogle = async () => {
    try {
      console.log("CLICK");
      await GoogleSignin.hasPlayServices();
      console.log("CLICK2");
      const userInfo = await GoogleSignin.signIn();
      console.log("aaaaaaaaaaaaaaaaaaa");
      setuserInfo(userInfo);
      const email = userInfo.user.email;
      const name = userInfo.user.name;
      const avatar = userInfo.user.photo;
      console.log('Id: ', userInfo.user.id);
      console.log('Email: ', userInfo.user.email);
      console.log('Name: ', userInfo.user.name);
      console.log('FamilyName: ', userInfo.user.familyName);
      console.log('GivenName: ', userInfo.user.givenName);
      console.log('Photo: ', userInfo.user.photo);
      try {
        const response = await AxiosInstance().post("user/api/loginGoogle",
          { email: email, name: name, avatar: avatar });
        // console.log("SIGN IN GOOGLE========>",response);
        if (response.result) {
          console.log(" SIGN IN GOOGLE========>", response);
          setIdUser(response.user._id)
          setIsLogin(true)
          setInfoUser(response.user)
          // console.log("SIGN UP & SIGN IN GOOGLE SUCCESS!");
          ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);

          // navigation.navigate("BottomTabs")
        } else {
          console.log("Tài khoản đã bị khóa");
          ToastAndroid.show("Tài khoản đã bị khóa", ToastAndroid.SHORT);

        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);

      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: COLOR.primary }]}>
        </Text>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={AppStyle.container}>
      <Image style={styles.image} source={require('../assets/images/ban_tin.png')} />
      <View style={styles.boxLogin}>
        <Text style={[AppStyle.titleBig, { alignSelf: 'center' }]}>Đăng nhập</Text>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: COLOR.primary }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataLocation}
            search
            maxHeight={300}
            labelField="labelLocation"
            valueField="valueLocation"
            placeholder={!isFocus ? 'Chọn cơ sở đào tạo' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <TouchableOpacity style={[AppStyle.border, { marginHorizontal: 16 }]} onPress={() => { signInGoogle() }} >
          <View style={[AppStyle.row, { alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16 }]}>
            <Image style={[AppStyle.icon, { marginRight: 15 }]} source={require('../assets/icons/Google.png')} />
            <Text style={AppStyle.text}>Đăng nhập bằng Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image style={{ bottom: 0, width: 130, height: 40, alignSelf: 'center' }} source={require('../assets/images/logo.jpg')} />
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
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

    paddingVertical: 20,
    top: -160,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: COLOR.normalText,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingLeft: 20,
  },
  selectedTextStyle: {
    color: COLOR.normalText,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingLeft: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10
  },
})