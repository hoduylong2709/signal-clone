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
const signin = dispatch => ({ email, password }) => {
  auth.signInWithEmailAndPassword(email, password)
    .catch(error => alert(error));
};
const signup = dispatch => ({ email, password, name, imageUrl }) => {
  auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
      authUser.user.updateProfile({
        displayName: name,
        photoURL: imageUrl || 'http://www.connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png'
      });
    })
    .catch(error => alert(error.message));
};
const signout = dispatch => () => {
  auth.signOut()
    .then(() => navigate('Login'));
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signin, signup, signout },
  { token: null, errorMessage: '' }
);