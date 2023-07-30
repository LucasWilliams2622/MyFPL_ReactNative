import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{ useState } from 'react'
import { AppStyle } from '../../constants/AppStyle'
import { COLOR } from '../../constants/Theme'
import { useNavigation } from '@react-navigation/native'

const ItemActivate = (props) => {
    const { data } = props
    const navigation = useNavigation()
    // const { title, content, name, date } = data

    const goDetail = () => {
        console.log("ID", data._id);
       navigation.navigate("DetailsNew", { id: data._id })
        
    }
    return (
        <TouchableOpacity onPress={()=> goDetail()}  style={[AppStyle.item, { width: 360, marginVertical: 5, }]}>

            <Text style={[AppStyle.titleMedium, { color: COLOR.title }]} numberOfLines={1}>{data.title}</Text>
            <View style={[AppStyle.row, { marginTop: 8}]}>
                <Image style={{ width:180, height: 85, borderRadius: 8 }} source={require('../../assets/images/green_field.jpg')} />
                <View style={[AppStyle.column, {}]}>
                    <Text style={[AppStyle.text, { width:165, paddingHorizontal: 8, marginTop:10 }]}  numberOfLines={4}>{data.content}</Text>
                </View>
            </View>
            
            <View style={[AppStyle.row, { marginTop: 15 }]}>
                <Text style={[AppStyle.text, { flex: 1 }]}>Người Đăng :{data.author}</Text>
             
                <Text style={[AppStyle.text, { flex: 1 ,textAlign:'right'}]}>Thời gian :{data.date.slice(0,10)}</Text>
            </View>
        </TouchableOpacity>
    )
  
}

export default ItemActivate