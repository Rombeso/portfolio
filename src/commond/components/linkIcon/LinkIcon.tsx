import style from "./LinkIcon.module.scss";
import React from "react";
import myPhoto from "../../../assets/images/my-cropped2.jpg";

type PropsStyle = {
    url?: string
    iconUrl?:string
}

export const LincIcon = (props: PropsStyle) => {

    return (
        <a href={props.url}>
        <div className={style.items} style={
            {backgroundImage: `url(${props.iconUrl})`,
            }}></div>
        </a>
    )
}