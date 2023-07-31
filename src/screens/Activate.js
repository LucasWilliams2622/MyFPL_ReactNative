import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR } from '../constants/Theme'
import { AppStyle } from '../constants/AppStyle'
import ItemActivate from '../components/New/ItemActivate'

import { AppContext } from '../utils/AppContext';
import AxiosInstance from '../constants/AxiosInstance';

const DataNewsActivate = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Thông báo thay đổi giờ học Block 2',
    content: "Thông báo Thông báoThông báoThông báoThông báoThông báoThông báoThông báoThông báoThông asd báoThông báoThông báoThông báo Thông báoThông báoThông báo ...",
    name: "trunghieu",
    date: "23/07/2023"
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsadaa',
    title: 'Thông báo lịch thi',
    content: "Thông báo Thông báoThông báoThông báoThông báoThông báoThông báoThông báoThông báoThông asd báoThông báoThông báoThông báo Thông báoThông báoThông báo ...",
    name: "trunghieu",
    date: "23/07/2023"

  },
]

const Activate = () => {
  const { idUser, infoUser, currentDay, appState, setAppState } = useContext(AppContext);
  const [dataCurrentNews, setdataCurrentNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllNews = async () => {
    try {
      // const response = await AxiosInstance().get("SchedulesSubject/api/get-by-current-day&currentDay=" + currentDay);
      const response = await AxiosInstance().get("/news/api/get-all");
      console.log("===================================response", response.news);
      if (response.result) {
        // console.log("===================================response", isLoading);
        setdataCurrentNews(response.news);
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

    getAllNews()
    return () => {

    }
  }, [appState])
  return (
    <SafeAreaView style={[styles.BoxContent,{paddingBottom:95}]} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
        <View style={[AppStyle.column,]}>
          <View style={[AppStyle.column,]}>
            <Text style={AppStyle.titleBig}> Tin mới nhất </Text>
            <Image style={[AppStyle.iconMedium, { position: "absolute", left: 110, bottom: 2 }]} source={require('../assets/icons/ic_new.png')} />
          </View>
          {isLoading ?
            (<Image
              source={require('../assets/gif/loading_bar.gif')}
              style={{ width: 150, height: 100, alignSelf: 'center', }} />)
            : (<FlatList
              vertical
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={dataCurrentNews}
              renderItem={({ item }) => <ItemActivate data={item} />}
              keyExtractor={item => item.id}
            />)}
        </View>
        <View style={[AppStyle.column,]}>
          <View style={[AppStyle.column, { marginTop: 20 }]}>
            <Text style={AppStyle.titleBig}> Tin mới khác </Text>
            <Image style={[AppStyle.iconMedium, { position: "absolute", left: 110, bottom: 2 }]} source={require('../assets/icons/ic_new.png')} />
          </View>
          {isLoading ?
            (<Image
              source={require('../assets/gif/loading_bar.gif')}
              style={{ width: 150, height: 100, alignSelf: 'center', }} />)
            : (<FlatList
              vertical
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={dataCurrentNews}
              renderItem={({ item }) => <ItemActivate data={item} />}
              keyExtractor={item => item.id}
            />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}

export default Activate
const styles = StyleSheet.create({
  BoxContent: {
    backgroundColor: COLOR.background4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    height: '100%',
    width: '100%',

    paddingHorizontal: 16,
    paddingVertical: 20,
  },

})