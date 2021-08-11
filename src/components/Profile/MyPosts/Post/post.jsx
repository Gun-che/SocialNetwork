import React from 'react';
import style from './posts.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src='https://yt3.ggpht.com/ytc/AAUvwnjcHan4dcskqItRXdoTHxRrG8Y6Wem0FaIxQlDKsA=s900-c-k-c0x00ffffff-no-rj'/>
            <span>{props.message}</span>
            <div>{props.like}</div>

        </div>
    )
}
export default Post