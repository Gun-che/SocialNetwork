import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={style.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}
const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(dialog =><DialogItem name={dialog.name} id={dialog.id}/> )
    let messagesElements = props.messagesPage.messages.map(message =><Message message={message.message} id={message.id}/> )

    return (
        <div className={style.dialogs}>

            <div className={style.dialog}>
                {dialogsElements}
            </div >

            <div className={style.message}>
                {messagesElements}
            </div>


        </div>

    )
}
export default Dialogs
