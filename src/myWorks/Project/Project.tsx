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
            <div className={style.image}
                 style={{background: `url(${props.backgroundImage})`,
                     backgroundSize: "cover", backgroundPosition: "center",
                 backgroundRepeat: "no-repeat"}}
            >
                <a href={''} className={style.button}>View more</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}