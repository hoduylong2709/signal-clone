import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { Context as AuthContext } from '../context/AuthContext';

const RegisterScreeen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          type='text'
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder='Password'
          type='password'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder='Profile Picture URL (optional)'
          type='text'
          value={imageUrl}
          onChangeText={setImageUrl}
          onSubmitEditing={() => signup({ email, password })}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <Button
        containerStyle={styles.button}
        title='Register'
        onPress={() => signup({ email, password })}
        raised
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300
  },
  button: {
    width: 200,
    marginTop: 10
  }
});

export default RegisterScreeen;

