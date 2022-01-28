import React from "react";
import style from './Project.module.css'

type PropsStyle = {
    title: string;
    description: string;
    backgroundImage: string;
}

export const Project = (props: PropsStyle) => {

    return (
        <div className={style.project}>
            <div className={style.image} style={{background: `url(${props.backgroundImage})`}}>
                <a href={''} className={style.button}>Посмотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}