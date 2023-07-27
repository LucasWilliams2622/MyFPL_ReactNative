import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import ItemProfile from '../components/Profile/ItemProfile'
COLOR
const Profile = () => {
  return (
    <SafeAreaView style={[AppStyle.container]}>
      <View style={[AppStyle.column, AppStyle.boxShadow, { paddingHorizontal: 12, paddingVertical: 8, borderBottomStartRadius: 20, borderBottomEndRadius: 20, width: '102%', elevation: 4,top:-6,left:-4 }]}>
        <View style={[AppStyle.row]}>
          <Text style={[AppStyle.titleBig, { color: COLOR.primary, flex: 1 }]}>Hồ sơ cá nhân</Text>
          <Image style={{ width: 100, height: 30 }} source={require('../assets/images/logo.jpg')} />
        </View>
        <ItemProfile />
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, marginBottom: 5 }]}>Trạng Thái: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>HDI</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, marginBottom: 5 }]}>Giới tính: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>Nam</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, marginBottom: 5 }]}>Ngày sinh: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>05-06-2003</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, }]}>Chuyên ngành: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>Lập trình di động</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1.2, marginTop: 5 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, marginBottom: 14 }]}>Địa chỉ: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>Địa chỉ: 12/23 khu phố 6, Đường abc, Phường XYZ, Quận 12, Tp.HCM</Text></Text>
        </View>
      </View>
      <ScrollView style={{ paddingVertical:12,paddingHorizontal:16, marginBottom:100}} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: 'gray', height: 150, borderRadius: 20, marginBottom: 10 }}>

        </View>
        <Text style={[AppStyle.titleBig, { marginBottom: 8 }]}>Hỗ trợ</Text>
        <View style={[, { padding: 10, borderRadius: 20, borderWidth: 1, borderColor: 'gray', marginBottom: 10 }]}><Text style={[, { color: COLOR.normalText, }]}>Môn này được phép vắng mấy buổi?</Text></View>
        <View style={[, { padding: 10, borderRadius: 20, borderWidth: 1, borderColor: 'gray', marginBottom: 10 }]}><Text style={[, { color: COLOR.normalText, }]}>Môn này được phép vắng mấy buổi?</Text></View>
        <View style={[, { padding: 10, borderRadius: 20, borderWidth: 1, borderColor: COLOR.primary, marginBottom: 10, backgroundColor: COLOR.primary }]}><Text style={[AppStyle.titleBig, { color: COLOR.white, textAlign: 'center' }]}>Nhắn tin hỗ trợ</Text></View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})