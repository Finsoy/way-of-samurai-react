import React, { useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ updateNewPostText, addPost, posts, newPostText }) => {
  const postInputRef = useRef(null);

  const onAddPost = () => {
    console.log("click");
    console.log(postInputRef.current.value);
    addPost();
  };

  const onPostChange = (event) => {
    console.log(event.target.value);
    updateNewPostText(event.target.value);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
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
          <button onClick={onAddPost}>Add post</button>
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
