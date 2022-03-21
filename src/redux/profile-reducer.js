import { actionTypes } from "../types";

const posts = [
  { id: 1, message: "Hi", likesCount: 0 },
  { id: 2, message: "How are you", likesCount: 56 },
];

const initialState = {
  posts,
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case actionTypes.UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.text };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: actionTypes.ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: actionTypes.UPDATE_NEW_POST_TEXT,
  text,
});

export default profileReducer;
