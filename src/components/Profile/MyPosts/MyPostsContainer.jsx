import React, { useState } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { useDispatch, useSelector } from "react-redux";

const MyPostsContainer = () => {
  const { posts, newPostText } = useSelector((state) => state.profilePage);
  const dispatch = useDispatch();

  const handleAddPost = () => {
    console.log("click");
    dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={handleAddPost}
      posts={posts}
      newPostText={newPostText}
    />
  );
};

export default MyPostsContainer;
