import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import { AppStyle } from '../constants/AppStyle'
import ItemDetail from '../components/New/ItemDetail'
import { useNavigation } from '@react-navigation/native'
import AxiosInstance from '../constants/AxiosInstance';
import { AppContext } from '../utils/AppContext';
import { SafeAreaView } from 'react-native-safe-area-context'



const DetailsNew = (props) => {
  const {navigation,route} = props;
  const {params} = route;
  const [dataNewsById, setDataNewsById] = useState({})


  const { idUser, infoUser, currentDay, appState, setAppState } = useContext(AppContext);

    

  const getByIdNews = async () => {
    try {
      const response = await AxiosInstance().get("news/api/get-by-id?id=" + params.id);
      // console.log("===================================response", response.news.title);
      if (response.result) {
        // console.log("===================================response", isLoading);
        setDataNewsById(response.news)
        
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getByIdNews()
    return () => {

    }
  }, [appState])


  return (
    <SafeAreaView style={[AppStyle.container, { padding: 16 }]}>
      <TouchableOpacity style={[AppStyle.row]} onPress={()=>{navigation.goBack()}}>
        <Image source={require('../assets/icons/ic_back_black.png')} />
        <Text style={[AppStyle.titleMedium]}> Chi tiết</Text>

      </TouchableOpacity>
      <Text style={[AppStyle.titleBig, { marginTop: 10 }]}>{dataNewsById.title}</Text>
      <View style={[AppStyle.container, { padding: 16 }]}>
            <Text style={[AppStyle.titleBig, { color: 'black',right:"3%" }]}>
                {dataNewsById.title}
            </Text>
            <Text style={[AppStyle.title, { width: 350 }]}>
              {dataNewsById.content}
            </Text>
            <Image style={{ width: "100%", height: 200, borderRadius: 10, top: "2%" }} source={require('../assets/images/green_field.jpg')} />
            <Text style={{ top: "3%" }}>
            {dataNewsById.content}
            
            </Text>
            <View style={{ top: "10%", flexDirection: 'row', justifyContent: 'space-between' }}>
                
                    <Text>Người đăng:  {dataNewsById.author}</Text>
                 
                    <Text> Thời gian: {dataNewsById.date.slice(0,10)}</Text>
                   
            </View>
        </View>
    </SafeAreaView>
  )
}

export default DetailsNew

const styles = StyleSheet.create({})