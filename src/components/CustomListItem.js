import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <View>
      <ListItem>
        <Avatar
          rounded
          source={{ uri: 'http://www.connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png' }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: 'bold' }}>Youtube Chat</ListItem.Title>
          <ListItem.Subtitle
            numberOfLines={1}
            ellipsizeMode='tail'
          >This is a test subtitle</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomListItem;

