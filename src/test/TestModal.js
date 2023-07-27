import React, { useState } from 'react';
import { View, Button, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import Email from 'react-native-email';
const sendEmail = () => {
  const email = 'sonnvps24943@fpt.edu.vn'; // Địa chỉ email nhận
  const subject = 'Tiêu đề email';
  const body = 'Nội dung email';

  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  Linking.openURL(url);
};
const App = () => {


  return (
    <View style={styles.container}>
     <Button title="Gửi email" onPress={()=>{sendEmail()}} />

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  panel: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default App;
