import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { AppStyle } from '../constants/AppStyle'
import AppHeader from '../components/AppHeader'
import Swiper from 'react-native-swiper'
import { COLOR } from '../constants/Theme'
import { AppContext } from '../utils/AppContext'
import AxiosInstance from '../constants/AxiosInstance';

import ItemScheduleToday from '../components/Home/ItemScheduleToday'
import ItemNews from '../components/Home/ItemNews'
import ItemNewsEnterprise from '../components/Home/ItemNewsEnterprise'


const DataNewsHome = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Thông báo thay đổi giờ học Block 2',
    content: "Thông báo Thông báoThông báoThông báoThông báoThông báoThông báoThông báoThông báoThông asd báoThông báoThông báoThông báo Thông báoThông báoThông báo ..."
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsadaa',

    title: 'Thông báo lịch thi',
    content: "Thông báo Thông báoThông báoThông báoThông báoThông báoThông báoThông báoThông báoThông asd báoThông báoThông báoThông báo Thông báoThông báoThông báo ..."
  },
]
const DataNewsEnterprise = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdnbvcsadaa',
    title: 'Thông báo thay đổi giờ học Block 2',
    nameCompany: "Công Ty TNHH ABC",
    location: "11 đường 11 quận 11 Tp.HCM",
    content: "Yêu cầu ứng viên:sinh viên các trường cao đăng, đại học tr ...",
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsavbndaa',
    title: 'Thông báo thay đổi giờ học Block 2',
    nameCompany: "Công Ty TNHH AHAH",
    location: "11 đường 21 quận 12 Tp.HCM",
    content: "Yêu cầu ứng viên:sinh viên các trường cao đăng, đại học tr ...",

  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsadâdsaa',
    title: 'Thông báo thay đổi giờ học Block 2',
    nameCompany: "Công Ty TNHH ABC",
    location: "11 đường 11 quận 11 Tp.HCM",
    content: "Yêu cầu ứng viên:sinh viên các trường cao đăng, đại học tr ...",
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsa123daa',
    title: 'Thông báo thay đổi giờ học Block 2',
    nameCompany: "Công Ty TNHH AHAH",
    location: "11 đường 21 quận 12 Tp.HCM",
    content: "Yêu cầu ứng viên:sinh viên các trường cao đăng, đại học tr ...",

  },
]

const Home = () => {
  const { idUser, infoUser, currentDay, appState, setAppState } = useContext(AppContext);
  const [dataCurrentSchedule, setDataCurrentSchedule] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getCurrentSchedule = async () => {
    try {
      console.log("currentDay", currentDay);
      const response = await AxiosInstance().get("scheduleStudy/api/get-by-current-day?currentDay=" + currentDay);
      for (let i = 0; i < response.scheduleStudy.length; i++) {
        console.log("===================================response", response.scheduleStudy);
      }
      if (response.result) {
        setDataCurrentSchedule(response.scheduleStudy);
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // console.log("INFOR ", infoUser);
    getCurrentSchedule()
    return () => {

    }
  }, [appState])
  
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper} >
          <Swiper showsButtons={false} autoplay={true}showsPagination={false} >
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../assets/images/Banner1.png')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../assets/images/Banner2.png')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../assets/images/Banner3.jpg')} />
            </View>
          </Swiper>
        </View>
        <View style={styles.BoxContent} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={AppStyle.column}>
            <Text style={AppStyle.titleBig}>Lịch học hôm nay</Text>
            {isLoading ?
              (<Image
                source={require('../assets/gif/loading_bar.gif')}
                style={{width: 150, height: 100 ,alignSelf:'center',}} />)
              :
              (<FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={dataCurrentSchedule}
                renderItem={({ item }) => <ItemScheduleToday data={item} />}
                keyExtractor={item => item.id}
              />
              )}
          </View>
          <View style={[AppStyle.column, { marginTop: 20 }]}>
            <Text style={AppStyle.titleBig}>Tin tức mới !</Text>
            {
              isLoading ? (<Image
                source={require('../assets/gif/loading_bar.gif')}
                style={{width: 150, height: 100 ,alignSelf:'center',}} />)
                :
                (<FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  data={DataNewsHome}
                  renderItem={({ item }) => <ItemNews data={item} />}
                  keyExtractor={item => item.id}
                />)
            }
          </View>
          <View style={[AppStyle.column, { marginTop: 20, marginBottom: 80 }]}>
            <Text style={[AppStyle.titleBig,{marginBottom:6}]}>Tin tức doanh nghiệp !</Text>
            <FlatList
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              vertical
              data={DataNewsEnterprise}
              renderItem={({ item }) => <ItemNewsEnterprise data={item} />}
              keyExtractor={item => item.id}
            />
            {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap' ,width:'100%',borderWidth:2,borderColor:'red'}}>
              {DataNewsEnterprise.slice(0, Math.ceil(DataNewsEnterprise.length )).map((item) => (
                <ItemNewsEnterprise  data={item}key={item.id} />
              ))}
            </View>   */}
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLOR.background} barStyle="dark-content" />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 17,
    height: 180,
    top: -10,

  },
  slide: {
    height: 180,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.background
  },
  image: {
    width: '95%',
    height: 180,
    borderWidth: 2,
    borderColor: COLOR.background,
    borderRadius: 20,

  },
  BoxContent: {
    backgroundColor: COLOR.background2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    height: '100%',
    width: '100%',

    paddingHorizontal: 16,
    paddingVertical: 20,
  },
})