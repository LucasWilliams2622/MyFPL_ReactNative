import React, { useState } from 'react';
import { View, Button, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const Overlay = () => (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={() => setOverlayVisible(false)}
    />
  );

  const Panel = () => (
    <View style={styles.panel}>
      <Text>Đây là nội dung của panel</Text>
      <Button title="Đóng" onPress={() => setOverlayVisible(false)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Hiển thị thông tin" onPress={() => setOverlayVisible(true)} />

      <Modal visible={isOverlayVisible} transparent>
        <View style={styles.container}>
          <Overlay />
          <Panel />
        </View>
      </Modal>
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
