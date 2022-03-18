import { actionTypes } from "../types";

const dialogs = [
  {
    id: 1,
    name: "Dimych",
    imageUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
  },
  {
    id: 2,
    name: "Vadim",
    imageUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
  },
  {
    id: 3,
    name: "Diana",
    imageUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
  },
  {
    id: 4,
    name: "Lera",
    imageUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
  },
  {
    id: 5,
    name: "Anton",
    imageUrl:
      "https://sun9-76.userapi.com/impg/VERH7wlJ69ujSvDY_nQw1Wn4pA2_hOT8hunAzQ/PShsOZzNM1Y.jpg?size=600x543&quality=95&sign=00a8e9a9b851fcac382bd2def5bb0ab9&type=album",
  },
];
const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you" },
  { id: 3, message: "My friend" },
  { id: 4, message: "BEEEP!" },
  { id: 5, message: "dance!" },
];

const initialState = {
  messages,
  dialogs,
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.message,
      };
      let newState = { ...state };
      newState.messages = [...state.messages];
      newState.messages.push(newMessage);
      newState.newMessageText = "";
      return newState;
    case actionTypes.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return { ...state, newMessageText: action.text };
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
