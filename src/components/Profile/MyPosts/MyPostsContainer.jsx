import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  const state = store.getState();

  const handleAddPost = () => {
    console.log("click");
    store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={handleAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
