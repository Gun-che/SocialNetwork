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
    let dialogs = [
        {id: 1, name: `Egor`},
        {id: 2, name: `Ivan`},
        {id: 3, name: `Anonimus`},
        {id: 4, name: `Gosha`},
        {id: 5, name: `Vahtang`},
    ]
    let messages = [
        {id: 1, message: `hi`},
        {id: 2, message: `fuck`},
        {id: 3, message: `loh`},
        {id: 4, message: `asshole`},
        {id: 5, message: `www`},
    ]

    let dialogsElements = dialogs.map(dialog =><DialogItem name={dialog.name} id={dialog.id}/> )
    let messagesElements = messages.map(message =><Message message={message.message} id={message.id}/> )

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
