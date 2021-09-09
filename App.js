import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreeen from './src/screens/RegisterScreeen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import HomeScreen from './src/screens/HomeScreen';

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
  Home: HomeScreen
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
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};