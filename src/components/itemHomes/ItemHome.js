import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleItemHome } from './StyleItemHome'

const ItemHome = () => {
  return (
    <View style={StyleItemHome.container}>
      <ScrollView>
        <Text style={StyleItemHome.title}>Lịch Học Hôm nay</Text>
        <View style={StyleItemHome.borders}>
          <Text style={StyleItemHome.titleSchedule}>Bạn có lịch học vào ngày hôm nay</Text>
          <Text style={StyleItemHome.titleSchedule}>Ca3 : Lập trình game 2D_MOB401</Text>
        </View>
        
        <Text style={StyleItemHome.title}>Thông tin việc làm</Text>
        <View style={StyleItemHome.borders}>
          <View style={{ flexDirection: 'row',alignItems:'center' }}>
            <Image style={StyleItemHome.imgInformation} />
            <View>
            <Text style={StyleItemHome.companyName}>Công ty abcxyz</Text>
            <Text style={StyleItemHome.contents}>Truyển dụng thực tập ngành thiết kế đồ họa</Text>
            </View>
          </View>
        </View>

        <Text style={StyleItemHome.title}>Thông tin hoạt động</Text>
        <View style={StyleItemHome.borders}>
          <Text style={StyleItemHome.titleSchedule}>Hỗ trợ sinh viên tìm trọ, danh sách phòng trọ</Text>
        </View>
        <View style={StyleItemHome.borders}>
          <Text style={StyleItemHome.titleSchedule}>Thông báo xác nhận đăng ký thành công BHYT đợt 2 tháng 6/2023</Text>
        </View>
      </ScrollView>
    </View>
  )
}


export default ItemHome