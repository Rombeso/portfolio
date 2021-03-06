import React from "react";
import style from './Nav.module.scss'
import { Link } from "react-scroll";

export const Nav = () => {

    return (
            <ul className={style.list}>
                <li className={style.item}><a href="#">Main</a></li>
                <li className={style.item}><Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}
                >Skills</Link></li>
                <li className={style.item}><Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}
                >Portfolio</Link></li>
                <li className={style.item}><Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration={500}
                >Contacts</Link></li>
                <li className={style.item}><a href={'https://drive.google.com/file/d/1TbHU8uSa96E3I4OIDxRNZwzIpVmZkMdF/view'} target="_blank">Download CV</a></li>
            </ul>
    )
}