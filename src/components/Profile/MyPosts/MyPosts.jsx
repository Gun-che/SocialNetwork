import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/post";

const MyPosts = (props) => {

    let postElements = props.posts.map(post => <Post message={post.message} like={post.like}/>)
    return (
        <div className={style.posts}>
           <textarea></textarea>
            <button>add post</button>
            {postElements}


        </div>
    )
}
export default MyPosts