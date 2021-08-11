import React from 'react';
import style from  './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/SVG-Logo_gray.svg/1200px-SVG-Logo_gray.svg.png'/>
        </header>
    )
}
export default Header