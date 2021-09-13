import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as ChatProvider } from './src/context/ChatContext';
import { setNavigator } from './src/navigationRef';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreeen from './src/screens/RegisterScreeen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import ChatCreateScreen from './src/screens/ChatCreateScreen';
import ChatScreen from './src/screens/ChatScreen';

const LoginStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreeen
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#2C6BED' },
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  }
});

const MainStack = createStackNavigator({
  Home: HomeScreen,
  ChatCreate: ChatCreateScreen,
  Chat: ChatScreen
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#2C6BED' },
    headerTintColor: 'white',
    headerTitleStyle: { color: 'white' }
  }
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  LoginFlow: LoginStack,
  MainFlow: MainStack
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <ChatProvider>
        <App ref={navigator => setNavigator(navigator)} />
      </ChatProvider>
    </AuthProvider>
  );
};