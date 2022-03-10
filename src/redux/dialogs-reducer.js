import { actionTypes } from "../types";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.message,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case actionTypes.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => ({
  type: actionTypes.ADD_MESSAGE,
  message,
});

export const updateNewMessageTextActionCreator = (message) => ({
  type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
  message,
});

export default dialogsReducer;
