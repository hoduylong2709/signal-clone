import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { db } from '../../firebase';

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').doc(id)
      .collection('messages').orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => setChatMessages(snapshot.docs.map(doc => doc.data())));

    return unsubscribe;
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={() => enterChat(id, chatName)}>
        <ListItem
          key={id}
          bottomDivider
        >
          <Avatar
            rounded
            source={{ uri: chatMessages?.[0]?.photoURL || 'http://www.connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png' }}
          />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold' }}>{chatName}</ListItem.Title>
            <ListItem.Subtitle
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomListItem;

