import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'
import { AppStyle } from '../../constants/AppStyle'
import { COLOR } from '../../constants/Theme'
 

const ItemProfile = () => {
  return (
    <View style={[styles.boxShadow,{width:'100%',zIndex:99}]}>

          <View style={[AppStyle.row, { width: '100%', padding: 16, alignItems: 'center', borderRadius: 10 }]}>
            <Image style={{ width: 70, height: 70, borderRadius: 100 }} source={require('../../assets/images/green_field.jpg')} />
            <View style={{ marginLeft: 15 }}>
              <Text style={[AppStyle.titleMedium, { color: COLOR.black }]}>Nguyễn Văn AAA</Text>
              <Text style={[AppStyle.titleMedium]}>PS36233</Text>
              <Text style={[AppStyle.titleSmall, { color: COLOR.normalText }]}>nguyenvanaaa@fpt.edu.vn</Text>
            </View>

          </View>

        </View>
  )
}

export default ItemProfile

const styles = StyleSheet.create({
     boxShadow:{ shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,}

})