import React from "react";
import style from './Footer.module.css'
import styleContainer from "../commond/styles/Container.module.css";


export const Footer = () => {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Roman Larionov</h2>
                <div className={style.footerSocial}>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    )
}