import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ScheduleStudy from './ScheduleStudy'
import ScheduleExam from './ScheduleExam'

import { AppStyle } from '../constants/AppStyle';
import AppHeader from '../components/AppHeader';

const renderScene = SceneMap({
  first: ScheduleStudy,
  second: ScheduleExam,
});

const Schedule = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Lịch Học' },
    { key: 'second', title: 'Lịch Thi' },
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
              <Text style={{ fontSize:20,
                  color: focused?"white":'#787878',
                  backgroundColor:focused?"#F26F25":'white',
                  borderRadius:8,
                  paddingVertical:8,
                  paddingHorizontal:20,
              }}>
                  {route.title}
              </Text>
            )}
            // tabStyle={{width:'auto'}}
            scrollEnabled={true}
            indicatorStyle={{backgroundColor:'white'}}
            style={{backgroundColor:'white'}} 
          />
        }
      />
    </SafeAreaView>


  );
}

export default Schedule

const styles = StyleSheet.create({})