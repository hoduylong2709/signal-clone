import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreeen from './src/screens/RegisterScreeen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const navigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreeen
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#2C6BED' },
    headerTitleStyle: { color: 'white' },
    headerTintColor: 'white'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
