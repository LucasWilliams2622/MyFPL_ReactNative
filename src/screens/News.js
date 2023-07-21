import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import ItemNews from '../components/ItemNews'

const News = () => {
  return (
    <View style={styles.main}>
      <View style={styles.view1}>
        <Image style={styles.icBack} source={require('../assets/icons/ic_back.png')} />
        <Text style={styles.txt}>News</Text>
        <Image style={styles.img1} source={require('../assets/images/imgFPT.png')} />
      </View>
      <View style={styles.body}>
        <View style={styles.view2}>
          <View style={styles.InputContainer}>
            <TextInput
              style={styles.Input}
              placeholder='Tìm kiếm'
            />
            <Image style={styles.seaIcon} source={require('../assets/icons/ic_search.png')} />
          </View>
        </View>
        <View style={styles.view3}>
          <View>
            <Pressable style={styles.btn1}>
              <Text style={styles.txt1}>Technology</Text>
            </Pressable>
            <Pressable style={styles.btn1}>
              <Text style={styles.txt1}>Technology</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.btn1}>
              <Text style={styles.txt1}>Technology</Text>
            </Pressable>
            <Pressable style={styles.btn1}>
              <Text style={styles.txt1}>Technology</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.btn1}>
              <Text style={styles.txt1}>Technology</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.txt2}>Tin tức mới</Text>
        <ScrollView
        showsVerticalScrollIndicator={false}>
          <ItemNews />
          <ItemNews />
          <ItemNews />
          <ItemNews />
          <ItemNews />
        </ScrollView>
      </View>

    </View>
  )
}

export default News

const styles = StyleSheet.create({
  txt2: {
    marginTop: 16,
    color: '#161719',
    marginLeft: 24,
    fontSize: 24,
  },
  txt1: {
    color: '#FFFFFF',
    marginTop: 3
  },
  view3: {
    flexDirection: 'row'
  },
  btn1: {
    marginTop: 16,
    marginLeft: 38,
    width: 80,
    height: 30,
    backgroundColor: '#F26F25',
    alignItems: 'center',
    borderRadius: 30
  },
  view2: {
    alignItems: 'center',
    marginTop: 20
  },
  seaIcon: {
    position: 'absolute',
    left: 10,
    top: 15,
    width: 24,
    height: 24
  },
  InputContainer: {
    position: 'relative',
    margin: 8,
  },
  Input: {
    width: 300,
    height: 48,
    marginTop: 4,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4E4B66',
    color: 'black',
    paddingStart: 50
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 30
  },
  img1: {
    marginLeft: 150,
    marginTop: -5
  },
  txt: {
    marginTop: 4,
    marginLeft: 15,
    fontSize: 20,
    color: '#FFFFFF'
  },
  view1: {
    flexDirection: 'row',
    height: 80,
    padding: 16
  },
  icBack: {
    marginTop: 10,
    marginLeft: 10,
    width: 10,
    height: 16
  },
  main: {
    width: '100%',
    height: '100%',
    //padding: 16,
    backgroundColor: '#F26F25',
    //borderRadius:30
  }
})