import React from "react";
import style from './Footer.module.css'
import styleContainer from "../commond/styles/Container.module.css";
import {LincIcon} from "../commond/components/linkIcon/LinkIcon";


export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Roman Larionov</h2>
                <div className={style.footerSocial}>
                    <LincIcon title={"Codewars"} url={'https://www.codewars.com/users/Rombeso'}/>
                    <LincIcon title={"Linkedin"} url={'https://www.linkedin.com/in/roman-larionov-60586876/'}/>
                    <LincIcon title={"Telegram"} url={'https://t.me/rombeso'}/>
                    <LincIcon title={"Github"} url={'https://github.com/Rombeso'}/>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    )
}