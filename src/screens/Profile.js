import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AppStyle } from '../constants/AppStyle'
import { COLOR } from '../constants/Theme'
import ItemProfile from '../components/Profile/ItemProfile'
import { Linking } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';

const sendEmail = () => {
  const email = 'sonnvps24943@fpt.edu.vn'; // Địa chỉ email nhận
  const subject = 'Tiêu đề email';
  const body = 'Nội dung email';

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  Linking.openURL(url);
};
const Profile = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const handleDirection = () => {
      if (origin && destination) {
          setDirections({
              origin: origin.description,
              destination: destination.description,
          });
      }
  };
  const [position, setPosition] = useState({
      latitude: 10.853864,
      longitude: 106.627351,
      latitudeDelta: 0.001,
      longitudeDelta: 0.01,
  });
  const [position2, setPosition2] = useState({
      latitude: 10.8529642,
      longitude: 106.6282855,
      latitudeDelta: 0.1,
      longitudeDelta: 0.01,
  });
  const [position3, setPosition3] = useState({
      latitude: 10.8529096,
      longitude: 106.6291175,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
  });
  // add this to the component's useEffect hook
  useEffect(() => {
      Geolocation.getCurrentPosition(
          position => {
              setCurrentLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
              });
          },
          error => console.log(error),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
  }, []);
  return (
    <SafeAreaView style={[AppStyle.container]}>
      <View style={[AppStyle.column, AppStyle.boxShadow, { paddingHorizontal: 16, paddingVertical: 8, borderBottomStartRadius: 20, borderBottomEndRadius: 20, width: '102%', elevation: 4, top: -6, left: -4 }]}>
        <View style={[AppStyle.row]}>
          <Text style={[AppStyle.titleBig, { color: COLOR.primary, flex: 1 }]}>Hồ sơ cá nhân</Text>
          <Image style={{ width: 100, height: 30 }} source={require('../assets/images/logo.jpg')} />
        </View>
        <ItemProfile />

        <View style={{ marginLeft: 10, marginBottom: 8 }}>
          <Text style={[AppStyle.titleSmall, { color: COLOR.black, marginBottom: 8, fontWeight: '500' }]}>Giới tính: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>Nam</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1, width: 100 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 8 }}>
          <Text style={[AppStyle.titleSmall, { color: COLOR.black, marginBottom: 8, fontWeight: '500' }]}>Ngày sinh: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>08-06-2003</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1, width: 180 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 8 }}>
          <Text style={[AppStyle.titleSmall, { color: COLOR.black, marginBottom: 8, fontWeight: '500' }]}>Chuyên ngành: <Text style={{ color: COLOR.normalText, fontWeight: '400' }}>Lập trình di động</Text></Text>
          <View style={{ backgroundColor: COLOR.normalText, height: 1.2, width: 250 }}></View>
        </View>
        <View style={{ marginLeft: 10, marginBottom: 5 }}>
          <Text style={[AppStyle.titleSmall, { color: COLOR.black, marginBottom: 14, fontWeight: '500' }]}>Địa chỉ:  <Text style={{ color: COLOR.normalText, fontWeight: '400', letterSpacing: 0.5, lineHeight: 20, }}>Địa chỉ: 12/23 khu phố 6, Đường abc, Phường XYZ, Quận 12, Tp.HCM</Text></Text>
        </View>
      </View>

      <ScrollView style={{ paddingVertical: 12, paddingHorizontal: 16, marginBottom: 100 }} showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', backgroundColor: 'gray',borderWidth:1, height: 170,  marginBottom: 10 }}>
        <MapView
                style={styles.map}
                initialRegion={position}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                scrollEnabled={true}
                zoomEnabled={true}
                pitchEnabled={true}
                rotateEnabled={true}>
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} />
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position2} />
                <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position3} />

            </MapView>
        </View>
        <Text style={[AppStyle.titleBig, { marginBottom: 8 }]}>Hỗ trợ</Text>
        <TouchableOpacity style={[AppStyle.button, { marginBottom: 16 }]}
          onPress={() => { sendEmail() }}>
          <Image style={AppStyle.icon} source={require('../assets/icons/Google.png')} />
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, textAlign: 'center', fontWeight: '500', marginLeft: 10 }]}>Gửi Gmail hỗ trợ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[AppStyle.button, { marginBottom: 20 }]}
          onPress={() => { { } }}>
          <Image style={AppStyle.icon} source={require('../assets/icons/ic_message_color.png')} />
          <Text style={[AppStyle.titleMedium, { color: COLOR.black, textAlign: 'center', fontWeight: '500', marginLeft: 10 }]}>Nhắn tin hỗ trợ</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius:20,
},
search: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    flexDirection: 'row',
},
})