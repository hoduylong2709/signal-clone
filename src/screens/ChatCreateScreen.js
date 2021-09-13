import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { Context as ChatContext } from '../context/ChatContext';

const ChatCreateScreen = () => {
  const [chatName, setChatName] = useState('');
  const { createChat } = useContext(ChatContext);

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter a chat name'
        value={chatName}
        onChangeText={setChatName}
        onSubmitEditing={() => createChat(chatName)}
        leftIcon={
          <FontAwesome name="wechat" size={24} color="#2C6BED" />
        }
      />
      <Button
        title='Create a new chat'
        onPress={() => createChat(chatName)}
      />
    </View>
  );
};

ChatCreateScreen.navigationOptions = () => {
  return {
    title: 'Add a new chat'
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%'
  }
});

export default ChatCreateScreen;

