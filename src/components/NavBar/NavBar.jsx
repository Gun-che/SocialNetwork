import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <div><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' activeClassName={style.active}>Message</NavLink></div>
            <div><NavLink to='/news' activeClassName={style.active}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={style.active}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={style.active}>Settings</NavLink></div>
        </nav>
    )
}
export default NavBar