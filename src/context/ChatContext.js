import createDataContext from "./createDataContext";
import { db } from '../../firebase';
import { navigate } from '../navigationRef';

const chatReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const createChat = dispatch => async (chatName) => {
  await db.collection('chats').add({
    chatName
  })
    .then(() => navigate('Home'))
    .catch(error => alert(error));
};

export const { Provider, Context } = createDataContext(
  chatReducer,
  { createChat },
  {}
);