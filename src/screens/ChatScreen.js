import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const chatName = navigation.getParam('chatName');

  return (
    <View>
      <Text>{id}</Text>
      <Text>{chatName}</Text>
    </View>
  );
};

ChatScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => (
      <View>
        <Text>{navigation.getParam('chatName')}</Text>
      </View>
    )
  };
};

const styles = StyleSheet.create({});

export default ChatScreen;

