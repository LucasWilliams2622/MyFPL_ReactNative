import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ItemSches = () => {
  return (
    <View>
      <Text>ItemSches</Text>

      <View style={styles.body}><Text style={styles.txt1}>Lich Hoc</Text></View>
      <View style={styles.body2} ><Text style={styles.txt2}>Lich Thi</Text></View>

      <View style={styles.body3} ><Text style={styles.txt3}  >7 ngay toi </Text></View>
      <View style={styles.body4}>
        <View style={styles.body5}></View>
        <View style={styles.body6}></View>

        <Text style={styles.txtt4}> Lap trinh game 2D nang cao</Text>
        <Text style={styles.txtt5}> 2023-07-20    .    15h15--17h15</Text>
        <Text style={styles.txtt6}> Lop : cp17311</Text>
        <Text style={styles.txtt7}> phong : T311 </Text>
        <Text style={styles.txtt8}> ca : 4</Text>
        <View></View>
        <Text style={styles.txtt9}>DinNT14</Text>
        <Text style={styles.txtt10}>Mob306</Text>



      </View>
    </View>
  )
}

export default ItemSches

const styles = StyleSheet.create({

  body: {
    position: "absolute",
    top: 120,
    left: 20,

    backgroundColor: "#F26F25",
    height: 50,
    width: 160,
    borderRadius: 50
  },
  body2: {
    position: "absolute",
    top: 120,
    right: 20,

    backgroundColor: "#FFF",
    height: 50,
    width: 160,
    borderRadius: 50
  },
  txt1: {
    color: 'white',
    position: "absolute",
    fontSize: 20,
    fontWeight: 'bold',
    left: 38,
    bottom: 12

  },
  txt2: {
    color: '#F26F25',
    position: "absolute",
    fontSize: 20,
    fontWeight: 'bold',
    left: 38,
    bottom: 12
  },
  body3: {
    margin: '45%',
    backgroundColor: "#FFFF",
    height: 40,
    width: 360,
    right: 160,
    borderRadius: 50,

  },
  txt3: {
    textAlign: 'center',
    fontWeight: 'bold',
    top: 11
  },
  body4: {
    position: "absolute",
    marginTop: '65%',
    backgroundColor: "#FFFF",
    width: 360,
    height: 120,
    borderRadius: 20,
    left: 18



  },
  body5: {
    backgroundColor: "#F26F25",
    height: 110,
    width: 5,
    left: 8,
    top: 14



  },
  body6: {
    backgroundColor: "#dddd",
    height: 3,
    width: 300,
    left: 27,
    bottom: 40


  },
  txtt4: {
    color: '#000',
    bottom: 100,
    left: 20





  },
  txtt5: {
    color: '#000',
    bottom: 90,
    left: 60

  }, txtt6: {
    color: '#000',
    bottom: 76,
    left: 50
  },
  txtt7: {
    color: '#000',
    bottom: 96,
    left: 155
  },
  txtt8: {
    color: '#000',
    bottom: 115,
    left: 255
  },
  txtt9: {
    color: '#000',
    bottom: 96,
    left: 120
  },
  txtt10: {
    color: '#000',
    bottom: 115,
    left: 200
  }








})