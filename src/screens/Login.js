import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../constants/Theme'
import LinearGradient from 'react-native-linear-gradient';
import { AppStyle } from '../constants/AppStyle';
import { Dropdown } from 'react-native-element-dropdown';

const dataLocation = [
  { labelLocation: 'Cơ sở Hồ Chí Minh', valueLocation: '1' },
  { labelLocation: 'Cơ sở Hà Nội', valueLocation: '2' },
  { labelLocation: 'Cơ sở Cần Thơ', valueLocation: '3' },
  { labelLocation: 'Cơ sở Đà Nẵng', valueLocation: '4' },

];
const Login = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
        <Text style={[AppStyle.title, { alignSelf: 'center' }]}>Đăng nhập</Text>
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
        <View style={[AppStyle.border, { marginHorizontal: 16 }]}>
          <View style={[AppStyle.row, { alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16 }]}>
            <Image style={[AppStyle.icon, { marginRight: 15 }]} source={require('../assets/icons/Google.png')} />
            <Text style={AppStyle.text}>Đăng nhập bằng Google</Text>
          </View>
        </View>
      </View>
      <Image  style={{bottom:0 ,width:130,height:40,alignSelf:'center'}}source={require('../assets/images/logo.jpg')}/>
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