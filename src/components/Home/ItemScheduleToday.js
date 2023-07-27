import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppStyle } from '../../constants/AppStyle'
import { COLOR } from '../../constants/Theme'
const ItemScheduleToday = (props) => {
    const { data } = props
    // const { title, DiaDiem, date, idMon } = data
    return (
        <TouchableOpacity style={[AppStyle.row, AppStyle.boxShadow, { backgroundColor: COLOR.background, borderRadius: 8, width: 270, height: 94, marginTop: 6, marginBottom: 10, marginRight: 10 }]}>
            <View style={{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: COLOR.primary, height: 94, width: 10 }}></View>
            <View style={[AppStyle.column, { paddingVertical: 12, paddingHorizontal: 8, }]}>
                <View style={[AppStyle.row, { alignItems: 'center', justifyContent: 'space-between', width: 230, }]}>
                    <Text style={[AppStyle.titleMedium, { color: COLOR.title }]}>{data.title}</Text>
                    <Text style={[AppStyle.text, { color: COLOR.text, fontWeight: '700' }]}>{data.idMon}</Text>
                </View>
                <View style={[AppStyle.row, { marginTop: 8, justifyContent: 'center', }]}>
                    <Image style={[AppStyle.iconSmall, { top: 3, marginRight: 5, }]} source={require('../../assets/icons/ic_location.png')} />
                    <Text style={[AppStyle.titleSmall, { color: COLOR.title }]}>{data.location}</Text>
                </View>
                <View style={[AppStyle.row, { marginTop: 2, justifyContent: 'space-between', width: 230, alignItems: 'center' }]}>
                    <View style={[AppStyle.row, { marginTop: 8, justifyContent: 'center', }]}>
                        <Image style={[AppStyle.iconSmall, { top: 3, marginRight: 5, }]} source={require('../../assets/icons/ic_clock.png')} />
                        <Text style={[AppStyle.titleSmall, { color: COLOR.title }]}>{data.date}</Text>
                    </View>
                    <TouchableOpacity style={[AppStyle.column, { justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={[AppStyle.titleSmall, { fontWeight: '400' }]}>Chi tiết</Text>
                        <View style={{ height: 1, width: 30, backgroundColor: COLOR.primary }} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemScheduleToday

const styles = StyleSheet.create({})