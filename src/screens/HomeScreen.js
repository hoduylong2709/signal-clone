import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { db, auth } from '../../firebase';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const [chats, setChats] = useState([]);

  const photoUrl = auth.currentUser.photoURL;

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot(snapshot => setChats(
      snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))
    ));
    return unsubscribe;
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', { id, chatName, photoUrl });
  };

  return (
    <SafeAreaView>
      <StatusBar style='black' />
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />)}
        <Spacer>
          <Button title='Log out' onPress={signout} />
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Signal',
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: 'black' },
    headerTintColor: 'black',
    headerLeft: () => (
      <View style={{ marginLeft: 20 }}>
        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
      </View>
    ),
    headerRight: () => (
      <View style={styles.headerRight}>
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('ChatCreate')}>
          <SimpleLineIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginRight: 20
  }
});

export default HomeScreen;

