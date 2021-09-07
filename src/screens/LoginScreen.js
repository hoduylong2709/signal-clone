import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { Context as AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus
          type='email'
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button
        title='Login'
        containerStyle={styles.button}
        onPress={signin}
      />
      <Button
        title='Register'
        containerStyle={styles.button}
        type='outline'
        onPress={() => navigation.navigate('Register')}
      />
      <View style={{ height: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  image: {
    width: 150,
    height: 150
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
});

export default LoginScreen;
