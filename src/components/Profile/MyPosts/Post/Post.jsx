import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg"/>
            {props.message}
            <div>
                <span>{props.likeCount} likes</span>
            </div>
        </div>
    )
}

export default Post
