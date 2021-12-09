import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.postsBlock}>
            <h3>{props.text}</h3>
            <div>
                <div><textarea name="" id="" cols="30" rows="10"/></div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={classes.posts}>
                <Post message='Hi! How are you?' likeCount={20}/>
                <Post message='it is my first post with props' likeCount={56}/>
            </div>
        </div>
    )
}

export default MyPosts
