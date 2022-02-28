import style from "./LinkIcon.module.scss";
import React from "react";
import myPhoto from "../../../assets/images/my-cropped2.jpg";
import {SvgSelector} from "../svgSelector/svgSelector";

type PropsStyle = {
    url?: string
    title:string
}

export const LincIcon = ({title, url}: PropsStyle) => {

    return (
        <a href={url}>
        {/*<div className={style.items} style={*/}
        {/*    {backgroundImage: `url(${props.iconUrl})`,*/}
        {/*    }}>*/}
            <div>
                <SvgSelector id={title} width={'68'} height={'68'}/>

        </div>
        </a>
    )
}