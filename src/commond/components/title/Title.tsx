import React from "react";
import style from './Title.module.css'

type PropsStyle = {
    title: string;
    sectionTitle: string;
}

export const Title = (props: PropsStyle) => {

    return (
        <div className={style.title}>
            <span>{props.sectionTitle}</span>
            <h2>{props.title}</h2>
        </div>
    )
}