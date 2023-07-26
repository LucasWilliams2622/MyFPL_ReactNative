import { StyleSheet, Text, SafeAreaView, View, Image, TextInput, Pressable, useWindowDimensions, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import React,{useState,useEffect,useContext} from 'react'
import { AppStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import AppHeader from '../components/AppHeader'
import Activate from '../screens/Activate'
import Study from '../screens/Study'
import Enterprise from '../screens/Enterprise'
import { AppContext } from '../utils/AppContext';
import AxiosInstance from '../constants/AxiosInstance';





const renderScene = SceneMap({
  first: Study,
  second: Activate,
  third: Enterprise,
});
const News = (props) => {
  const { idUser, infoUser, currentDay, appState, setAppState } = useContext(AppContext);

  const [dataCurrentNews, setdataCurrentNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Học Tập' },
    { key: 'second', title: 'Hoạt Động' },
    { key: 'third', title: 'Doanh Nghiệp' },


  ]);
 

  const getAllNews = async () => {
    try {
      // const response = await AxiosInstance().get("SchedulesSubject/api/get-by-current-day&currentDay=" + currentDay);
      const response = await AxiosInstance().get("/news/api/get-all");
      console.log("===================================response", response);

      if (response.result) {
        // console.log("===================================response", isLoading);
        setdataCurrentNews(response.SchedulesSubject);
        setIsLoading(false)
      } else {
        setIsLoading(true)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // console.log("INFOR ", infoUser);

    getAllNews()
    return () => {

    }
  }, [appState])
  //   return(
  //     <Image 
  //     source={require('../assets/gif/loading_bar.gif')}  
  //     style={{width: 300, height: 300 ,alignSelf:'center'}}
  // />
  //   )
  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader style={{ height: "45%", }} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={
          props =>
            <TabBar {...props}
              renderLabel={({ route, color, focused }) => (
                <Text style={{
                  fontSize: 15,
                  color: focused ? '#F26F25' : '#787878',
                  fontWeight: "600",
                  borderRadius: 8,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                }}>
                  {route.title}
                </Text>
              )}
              // tabStyle={{width:'auto'}}
              scrollEnabled={true}

              style={{ backgroundColor: 'white' }}
              indicatorStyle={{
                backgroundColor: '#F26F25',
                width: "15%",
                height: 3,
                borderRadius: 40,
                left: '9%',
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
