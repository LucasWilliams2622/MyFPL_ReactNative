import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, Pressable, useWindowDimensions, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import React from 'react'
import { AppStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import AppHeader from '../components/AppHeader'
import Activate from '../screens/Activate'
import Study  from '../screens/Study'
import Enterprise from '../screens/Enterprise'



const renderScene = SceneMap({
  first: Study,
  second: Activate,
  third: Enterprise,
});
const News = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Học Tập' },
    { key: 'second', title: 'Hoạt Động' },
    { key: 'third', title: 'Doanh Nghiệp' },


  ]);
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader  style={{ height: "45%",}}/>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar = {
          props => 
          <TabBar {...props} 
            renderLabel={({ route, color, focused }) => (
              <Text style={{ fontSize:15,
                  color: focused?'#F26F25':'#787878',
                  fontWeight:"600",
             
                  borderRadius:8,
                  paddingVertical:8,
                  paddingHorizontal:20,
              }}>
                  {route.title}
              </Text>
            )}
            // tabStyle={{width:'auto'}}
            scrollEnabled={true}
         
            style={{backgroundColor:'white'}} 
            indicatorStyle={ {
              backgroundColor: '#F26F25',
              width: "15%",
              height: 3,
              borderRadius: 40,
              left:'9%',
            }}
          />
        }
      />
    
     
    </SafeAreaView>
  );

}

export default News

const styles = StyleSheet.create({
  BoxContent: {
    backgroundColor: COLOR.background2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
    height: '100%',
    width: '100%',

    paddingHorizontal: 16,
    paddingVertical: 20,
  },

})
