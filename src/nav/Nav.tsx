import React from "react";
import style from './Nav.module.scss'

export const Nav = () => {

    return (
        // <nav className={style.nav}>
            <ul className={style.list}>
                <li className={style.item}><a href="">Main</a></li>
                <li className={style.item}><a href="">Skills</a></li>
                <li className={style.item}><a href="">Portfolio</a></li>
                <li className={style.item}><a href="">Contacts</a></li>
                <li className={style.item}><a href="">Download CV</a></li>
            </ul>





        // </nav>
    )
}