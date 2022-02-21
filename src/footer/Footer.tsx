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
                    <LincIcon/>
                    <LincIcon/>
                    <LincIcon/>
                    <LincIcon/>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    )
}