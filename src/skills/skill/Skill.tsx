import React from "react";

import style from './Skill.module.scss'
import {SvgSelector} from "../../commond/components/svgSelector/svgSelector";

type PropsStyle = {
    title: string
    width: string
    height: string
}

export const Skill = ({title, width, height}: PropsStyle) => {

    return (
        <div className={style.skill}>
                <div>
                    <SvgSelector  id={title} width={width} height={height}/>
            </div>
            <h3>{title}</h3>
        </div>
    )
}