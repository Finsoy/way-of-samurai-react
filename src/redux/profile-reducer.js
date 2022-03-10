import { actionTypes } from "../types";

const profileReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case actionTypes.UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
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
