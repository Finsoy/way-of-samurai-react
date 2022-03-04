import React, { useRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ posts, text, addPost }) => {
  const postInputRef = useRef(null);

  const handleAddPost = (event) => {
    console.log('click');
    console.log(postInputRef.current.value);
    addPost(postInputRef.current.value);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>{text}</h3>
      <div>
        <div>
          <textarea ref={postInputRef} name="" id="" cols="30" rows="10" />
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
