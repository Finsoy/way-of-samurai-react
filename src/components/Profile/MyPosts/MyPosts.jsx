import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({posts, text}) => {

  return (
    <div className={classes.postsBlock}>
      <h3>{text}</h3>
      <div>
        <div><textarea name="" id="" cols="30" rows="10"/></div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={classes.posts}>
        {posts.map(({id, message, likesCount}) => <Post key={id} message={message} likesCount={likesCount}/>)}
      </div>
    </div>
  )
}

export default MyPosts
