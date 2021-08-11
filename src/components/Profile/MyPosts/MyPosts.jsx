import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: `hi`, like: 12},
        {id: 2, message: `its my first post`, like: 22},
        {id: 3, message: `loh`, like: 32},
        {id: 4, message: `asshole`, like: 32},

    ]

    let postElements = posts.map(post => <Post message={post.message} like={post.like}/>)
    return (
        <div className={style.posts}>
           <textarea></textarea>
            <button>add post</button>
            {postElements}


        </div>
    )
}
export default MyPosts