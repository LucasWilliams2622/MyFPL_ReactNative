import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { AppStyle } from '../../constants/AppStyle'
import { COLOR } from '../../constants/Theme'
import { dateNearThe } from '../../screens/Study'

const ItemStudy = (props) => {
    const { data } = props
    // const {id, title, content, name, date } = data
    const [isShow, setIsShow] = useState(false)
    const [showImg, setshowImg] = useState(false)
    const facingShow = () => {
        if(date == dateNearThe()){       
             setshowImg(!showImg)
         }
         setIsShow(!isShow)
    }

    const showImage = () =>{
       
    }
    return (

        <TouchableOpacity onPress={facingShow} style={[AppStyle.item, { width: 360, marginVertical: 5}]}>
            <Text style={[AppStyle.titleMedium, { color: COLOR.title }]} numberOfLines={1}>{data.title}</Text>
            <Image style={{width:'100%',height:80,borderRadius:10 ,display:showImg?'flex':'none'}} source={require('../../assets/images/green_field.jpg')}/> 
            <Text style={{display:isShow?'flex':'none'}}>{data.content}</Text>
            <Text style={[AppStyle.text, { flex: 1,marginTop:5,display:isShow?'none':'flex' }]}>Người Đăng :{data.author}</Text>
            <View style={[AppStyle.row, { width:'100%' ,marginTop:5}]}>
                <Text style={[AppStyle.text, { flex: 1 }]}>Thời gian :{data.date}</Text>
            <Text style={[AppStyle.text, { flex: 1,display:isShow?'flex':'none' }]}>Người Đăng :{data.name}</Text>

                <TouchableOpacity onPress={facingShow} style={[AppStyle.column, { justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', flex: 1 }]}>
                    <Text style={[AppStyle.titleSmall, { fontWeight: '400' ,alignSelf:'flex-end'}]}> {isShow ? "Ẩn bớt" : "Xem thêm"}</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ItemStudy