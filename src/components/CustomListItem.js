import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => enterChat(id, chatName)}>
        <ListItem
          key={id}
          bottomDivider
        >
          <Avatar
            rounded
            source={{ uri: 'http://www.connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png' }}
          />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold' }}>{chatName}</ListItem.Title>
            <ListItem.Subtitle
              numberOfLines={1}
              ellipsizeMode='tail'
            >This is a test subtitle</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomListItem;

