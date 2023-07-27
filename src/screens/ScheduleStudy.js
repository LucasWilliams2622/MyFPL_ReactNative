import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState,useEffect,useContext } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { Dropdown } from 'react-native-element-dropdown'
import ItemScheduleExam from '../components/Schedule/ItemScheduleExam';
import { COLOR } from '../constants/Theme';
import ItemScheduleStudy from '../components/Schedule/ItemScheduleStudy';
import AxiosInstance from '../constants/AxiosInstance';
import { AppContext } from '../utils/AppContext'
import Swiper from 'react-native-swiper'

const data = [
  { label: '3 ngày tới', value: '1' },
  { label: '7 ngày tới', value: '2' },
  { label: '14 ngày tới', value: '3' },
  { label: '21 ngày tới', value: '4' },
  { label: '30 ngày tới', value: '5' },
  { label: '60 ngày tới', value: '6' },
  { label: '90 ngày tới', value: '7' },
];

const DataScheduleToday = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bdsadaa',
    title: 'Game 2d',
    location: "Phòng T123 (Tòa T)",
    time: "Ca 4 | 15:15 - 17:15",
    subJectCode: "MOB123",
    lecturers: "dintnt24",
    amphitheater: "Phần mềm quang trung",
    layer: "MD18102",
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbdsadas28ba',
    title: 'Game 3D',
    location: "Phòng T123 (Tòa F)",
    time: "Ca 4 | 15:15 - 17:15",
    subJectCode: "MOB123",
    lecturers: "dintnt24",
    amphitheater: "Phần mềm quang trung",
    layer: "MD18102",
  },
];

const ItemTextSches = (props) => {
  const { idUser, infoUser, currentDay, appState, setAppState } = useContext(AppContext);
  const [dataCurrentScheduleStudy, setdataCurrentScheduleStudy] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getCurrentSchedule = async () => {
    try {
      // const response = await AxiosInstance().get("SchedulesSubject/api/get-by-current-day&currentDay=" + currentDay);
      const response = await AxiosInstance().get("scheduleStudy/api/get-all");
      console.log("===================================response", response);

      if (response.result) {
        // console.log("===================================response", isLoading);
        setdataCurrentScheduleStudy(response.scheduleStudy);
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
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={AppStyle.container}>
      <Dropdown
        style={[AppStyle.dropdown, isFocus && { borderColor: COLOR.primary, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="7 ngày tới"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
      <Image style={[AppStyle.icon, { position: 'absolute', left: 30, top: 28, tintColor: isFocus ? COLOR.primary : COLOR.black }]} source={require('../assets/icons/ic_schedule.png')} />
      <View style={styles.BoxContent}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Text style={[AppStyle.titleBig, { marginBottom: 10 }]}>Lịch học hôm nay</Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={dataCurrentScheduleStudy}
            renderItem={({ item }) => <ItemScheduleStudy data={item} />}
            keyExtractor={item => item.id}
          />
          {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
            {DataScheduleToday.slice(0, Math.ceil(DataScheduleToday.length)).map((item) => (
              <ItemScheduleStudy data={item} key={item.id}/>
            ))}
          </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}


export default ItemTextSches

const styles = StyleSheet.create({
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "93%"
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',

  },
  placeholderStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',

  },

  iconStyle: {
    width: 30,
    height: 30,
  },
  BoxContent: {
    backgroundColor: COLOR.background2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    height: '100%',
    width: '100%',

    paddingHorizontal: 16,
    paddingVertical: 8
  },
});