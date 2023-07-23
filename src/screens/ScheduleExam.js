import { View, Text, StyleSheet, SafeAreaView, ScrollView, FlatList, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react'
import { AppStyle } from '../constants/AppStyle'
import { Dropdown } from 'react-native-element-dropdown'
import ItemSchedule from '../components/ItemSchedule';
import { COLOR } from '../constants/Theme';



const data = [
  { label: '3 ngày tới', value: '1' },
  { label: '7 ngày tới', value: '2' },
  { label: '14 ngày tới', value: '3' },
  { label: '21 ngày tới', value: '4' },
  { label: '28 ngày tới', value: '5' },
  { label: '35 ngày tới', value: '6' },
  { label: '42 ngày tới', value: '7' },
  { label: '49 ngày tới', value: '8' },
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
    layer:"MD18102",
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Game 3D',
    location: "Phòng T123 (Tòa F)",
    time: "Ca 4 | 15:15 - 17:15",
    subJectCode: "MOB123",
    lecturers: "dintnt24",
    amphitheater: "Phần mềm quang trung",
    layer:"MD18102",
  },
];

const ItemTextSches = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


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
        style={[AppStyle.dropdown, isFocus && {borderColor:COLOR.primary,borderBottomLeftRadius:0,borderBottomRightRadius:0}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.placeholderStyle}
        iconStyle={styles.iconStyle}
        showsVerticalScrollIndicator={false}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={data[1].label}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderItem={renderItem}
      />
      <Image style={[AppStyle.icon,{position:'absolute',left:30,top:28,tintColor:isFocus ? COLOR.primary : COLOR.black}]} source={require('../assets/icons/ic_schedule.png')}/>
      <View style={styles.BoxContent}>
        <ScrollView>
          <Text style={[AppStyle.titleBig,{marginBottom:10}]}>Lịch học hôm nay</Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={DataScheduleToday}
            renderItem={({ item }) => <ItemSchedule data={item} />}
            keyExtractor={item => item.id}
          />

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
    paddingVertical:8
  },
});