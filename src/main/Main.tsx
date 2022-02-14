import React from "react";
import style from './Main.module.css'
import styleContainer from '../../src/commond/styles/Container.module.css'


export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi there!</span>
                    <h1>I am Roman Larionov</h1>
                    <p>A Frond-end developer </p>
                </div>

                <div className={style.photo}></div>
            </div>
        </div>
    )
}