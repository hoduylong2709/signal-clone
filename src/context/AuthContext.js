import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => () => { };
const signin = dispatch => () => { };
const signup = dispatch => () => { };
const signout = dispatch => () => { };

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signin, signup, signout },
  { token: null, errorMessage: '' }
);