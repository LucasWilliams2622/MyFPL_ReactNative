import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors'

const ItemNews = () => {
  return (
    <View style={styles.main}>
      <View style={styles.item}>
        <View style={styles.item1}>
        <Image source={require('../assets/images/imgNews.png')} />
          <View style={styles.item2}>
            <Text style={styles.txt}>Lịch Thi Block 3</Text>
            <Text style={styles.txt1}>Đã có lịch thi mới của block 3</Text>
            <View style={styles.item3}>
                <Text>•</Text>
                <Text style={styles.txt2}>CTSV FPOLY</Text>
                <Text style={{marginLeft:5}}>•</Text>
                <Text style={styles.txt2}>10-11-2023</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default ItemNews

const styles = StyleSheet.create({
  txt2:{
    marginLeft:5,
    color:'#161719'
  },
  item3:{
    flexDirection:'row',
    marginTop:15
  },
  txt1:{
    marginTop:5,
    width:200
  },
  txt:{
    width:200,
    color:'#161719',
    fontSize:16
  },
  item2:{
    marginLeft:15
  },
  item1:{
    flexDirection:'row',
    padding:13
  },
  item:{
    height:105,
    width:325,
    borderRadius:20,
    backgroundColor:'#FCFCFF'
  },
  main:{
    alignItems:'center',
    marginTop:16
  }
})