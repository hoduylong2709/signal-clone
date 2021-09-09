import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { auth } from '../../firebase';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    title: 'Signal test',
    headerStyle: { backgroundColor: 'white' },
    headerTitleStyle: { color: 'black' },
    headerTintColor: 'black',
    headerRight: () => (
      <View>
        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
      </View>
    )
  };
};

const styles = StyleSheet.create({});

export default HomeScreen;

