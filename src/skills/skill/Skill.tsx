import React from "react";

import style from './Skill.module.scss'
import myPhoto from "../../assets/images/my-cropped2.jpg";

type PropsStyle = {
    title: string;
    urlIcon:string;
}

export const Skill = (props: PropsStyle) => {

    return (
        <div className={style.skill}>
            <div className={style.icon}
                 style={{backgroundImage: `url(${props.urlIcon})`}}>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}