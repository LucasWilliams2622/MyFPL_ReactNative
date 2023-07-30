
// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// import MapViewDirections from 'react-native-maps-directions';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCt1M8bgRStC2ZVsWWJuYcv3N0FcS2zjTY';

// class MapScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             latitude: null,
//             longitude: null,
//             error: null,
//         };
//     }

//     componentDidMount() {
//         check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
//           .then((result) => {
//             switch (result) {
//               case RESULTS.UNAVAILABLE:
//                 console.log('This feature is not available (on this device / in this context)');
//                 break;
//               case RESULTS.DENIED:
//                 request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
//                   .then((result) => {
//                     if (result === RESULTS.GRANTED) {
//                       this.getCurrentLocation();
//                     }
//                   })
//                   .catch((error) => {
//                     console.log('Error requesting location permission: ', error);
//                   });
//                 break;
//               case RESULTS.GRANTED:
//                 this.getCurrentLocation();
//                 break;
//               case RESULTS.BLOCKED:
//                 console.log('The permission is blocked and not requestable anymore');
//                 break;
//             }
//           })
//           .catch((error) => {
//             console.log('Error checking location permission: ', error);
//           });
//       }
//       getCurrentLocation() {
//         Geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             this.setState({ latitude, longitude });
//           },
//           (error) => {
//             this.setState({ error: error.message });
//           },
//           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//         );
//       }


//     render() {
//         const { latitude, longitude, error } = this.state;
//         const destination = { latitude: 10.853797, longitude: 106.628354 }; // Vị trí chỉ định 10.853797, 106.628354
//         if (error) {
//             return <Text>Error: {error}</Text>;
//         } else if (latitude && longitude) {
//             return (
//                 <MapView
//                     style={{ flex: 1 }}
//                     initialRegion={{
//                         latitude,
//                         longitude,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     <Marker coordinate={{ latitude, longitude }} />
//                     <Marker coordinate={destination} />
//                     <MapViewDirections
//                         origin={{ latitude, longitude }}
//                         destination={destination}
//                         apikey={GOOGLE_MAPS_APIKEY}
//                         strokeWidth={3}
//                         strokeColor="hotpink"
//                     />
//                 </MapView>
//             );
//         } else {
//             return <Text>Loading...</Text>;
//         }
//     }
// }

// export default MapScreen;

import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
const TesTMap = () => {
  const destination = { latitude: 10.853797, longitude: 106.628354 };
  return (
    <View style={{ flex: 1 }}>
      <MapView

        style={styles.map}
        initialRegion={{
          latitude: 10.853797,
          longitude: 106.628354,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default TesTMap

const styles = StyleSheet.create({
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: '100%'

  },
})






// // import React from 'react';
// // import { View } from 'react-native';
// // import MapView, { Marker } from 'react-native-maps';
// // const App = () => {
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <MapView
// //         style={{ flex: 1 }}
// //         initialRegion={{
// //           latitude: 10.762622,
// //           longitude: 106.660172,
// //           latitudeDelta: 0.0922,
// //           longitudeDelta: 0.0421,
// //         }}
// //       >
// //         <Marker
// //           coordinate={{ latitude: 10.762622, longitude: 106.660172 }}
// //           title="Vị trí 1"
// //           description="Đây là vị trí 1"
// //         />
// //         <Marker
// //           coordinate={{ latitude: 10.765432, longitude: 106.662345 }}
// //           title="Vị trí 2"
// //           description="Đây là vị trí 2"
// //         />
// //         <Marker
// //           coordinate={{ latitude: 10.768765, longitude: 106.664567 }}
// //           title="Vị trí 3"
// //           description="Đây là vị trí 3"
// //         />
// //       </MapView>
// //     </View>
// //   );
// // };

// // export default App;
