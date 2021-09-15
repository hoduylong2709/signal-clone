import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../../firebase';
import firebase from 'firebase/app'

const ChatScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const chatId = navigation.getParam('id');
  const { displayName, email, photoURL } = auth.currentUser;

  useEffect(() => {
    const unsubscribe = db.collection('chats').doc(chatId)
      .collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setMessageList(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      ));

    return unsubscribe;
  }, []);

  const sendMessage = () => {
    db.collection('chats').doc(chatId)
      .collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message,
        displayName,
        email,
        photoURL
      });

    setMessage('');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style='light' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>
            {messageList.map(({ id, data }) => (
              data.email === email ? (
                <View key={id} style={styles.reciever}>
                  <Avatar
                    position='absolute'
                    source={{ uri: data.photoURL }}
                    rounded
                    // Web
                    containerStyle={{
                      position: 'absolute',
                      bottom: -15,
                      right: -5
                    }}
                    size={30}
                    bottom={-15}
                    right={-5}
                  />
                  <Text style={styles.recieverText}>{data.message}</Text>
                </View>
              ) : (
                <View key={id} style={styles.sender}>
                  <Avatar
                    position='absolute'
                    source={{ uri: data.photoURL }}
                    rounded
                    // Web
                    containerStyle={{
                      position: 'absolute',
                      bottom: -15,
                      left: -5
                    }}
                    size={30}
                    bottom={-15}
                    left={-5}
                  />
                  <Text style={styles.senderText}>{data.message}</Text>
                  <Text style={styles.senderName}>{data.displayName}</Text>
                </View>
              )
            ))}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder='Signal message'
              style={styles.textInput}
              value={message}
              onChangeText={setMessage}
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity
              onPress={sendMessage}
              activeOpacity={0.5}
            >
              <Ionicons name='send' size={24} color='#2B68E6' />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

ChatScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Avatar
          rounded
          source={{ uri: navigation.getParam('photoUrl') }}
        />
        <Text
          style={{ color: 'white', marginLeft: 10, fontWeight: 'bold' }}
        >{navigation.getParam('chatName')}</Text>
      </View>
    ),
    headerRight: () => (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 70,
          marginRight: 20
        }}
      >
        <TouchableOpacity>
          <FontAwesome name='video-camera' size={22} color='white' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name='call' size={22} color='white' />
        </TouchableOpacity>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  reciever: {
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    marginTop: 15,
    maxWidth: '80%',
    position: 'relative'
  },
  sender: {
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 15,
    maxWidth: '80%',
    position: 'relative'
  },
  senderText: {
    color: 'white'
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: 'white'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30
  }
});

export default ChatScreen;

