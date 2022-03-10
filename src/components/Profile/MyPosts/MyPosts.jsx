import React, { useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPosts = ({ posts, text, newPostText, dispatch }) => {
  const postInputRef = useRef(null);

  const handleAddPost = (event) => {
    console.log("click");
    console.log(postInputRef.current.value);
    dispatch(addPostActionCreator());
  };

  const onPostChange = (event) => {
    console.log(event.target.value);
    dispatch(updateNewPostTextActionCreator(event.target.value));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>{text}</h3>
      <div>
        <div>
          <textarea
            ref={postInputRef}
            onChange={onPostChange}
            value={newPostText}
            cols="30"
            rows="5"
          />
        </div>
        <div>
          <button onClick={handleAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {posts.map(({ id, message, likesCount }) => (
          <Post key={id} message={message} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
