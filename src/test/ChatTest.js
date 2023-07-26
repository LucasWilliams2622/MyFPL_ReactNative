import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { GiftedChat } from 'react-native-gifted-chat';
import { io } from "socket.io-client";
import AppHeader from '../components/AppHeader'
import { View, Text } from 'react-native';
import { AppStyle } from '../constants/AppStyle';
import { COLOR } from '../constants/Theme';
const socket = io("http://10.0.2.2:3001", { transports: ['websocket'] });

export default function App() {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("join-room", "room1")
      console.log(socket.id);
    });

    socket.on("onMessage", (newMessages) => {
      console.log("newMessages")
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    });

    socket.on("disconnect", () => {
      console.log("disconnect"); // undefined
    });

    return () => {

    }
  }, [])


  const onSend = (newMessages = []) => {
    console.log("onSend")
    socket.emit("sendMessage", newMessages);
  };

  return (
    <SafeAreaView style={AppStyle.container}>
      <AppHeader />
      <TouchableOpacity style={[AppStyle.row,]} onPress={() => { navigation.navigate("Home") }}>
        <Image style={[AppStyle.iconMedium, { tintColor: COLOR.icon, height: 20 }]} source={require('../assets/icons/ic_back.png')} />
        <Text style={[AppStyle.titleMedium, { marginLeft: 10 }]}>Quay lại</Text>
      </TouchableOpacity>
      <View style={{ borderWidth: 2, width: '100%', height: '87%' }}>

        <GiftedChat
          placeholder="Hãy hỏi gì đó"
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
