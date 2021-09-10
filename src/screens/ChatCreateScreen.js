import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

const ChatCreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Create Screen</Text>
    </View>
  );
};

ChatCreateScreen.navigationOptions = () => {
  return {
    title: 'Add a new chat'
  };
};

const styles = StyleSheet.create({
  container: {}
});

export default ChatCreateScreen;

