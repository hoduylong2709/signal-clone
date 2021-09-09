import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { auth } from '../../firebase';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => () => {
  auth.onAuthStateChanged(authUser => {
    if (authUser) {
      navigate('Home');
    } else {
      navigate('Login');
    }
  });
};
const signin = dispatch => () => {
  alert('You clicked login button!');
};
const signup = dispatch => () => { };
const signout = dispatch => () => { };

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signin, signup, signout },
  { token: null, errorMessage: '' }
);