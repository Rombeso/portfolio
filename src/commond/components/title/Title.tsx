import React, {CSSProperties} from "react";
import style from './Title.module.scss'

type PropsStyle = {
    title: string
    sectionTitle: string
    subtitle?: string
    titleStyle?: CSSProperties
    sectionTitleStyle?: CSSProperties
    subtitleStyle?: CSSProperties
}

export const Title = (props: PropsStyle) => {

    return (
        <div className={style.title}>
            <span style={props.sectionTitleStyle}>{props.sectionTitle}</span>
            <h2 style={props.titleStyle}>{props.title}</h2>
            <p style={props.subtitleStyle}>{props.subtitle}</p>
        </div>
    )
}