import React from "react";
import style from './Project.module.scss'


type PropsStyle = {
    title: string;
    description: string;
    backgroundImage: string;
    gitLink:string,
    pageLink: string
}

export const Project = (props: PropsStyle) => {

    return (
        <div className={style.project}>
            <div className={style.image}
                 style={{
                     background: `url(${props.backgroundImage})`,
                     backgroundSize: "100%", backgroundPosition: "center",
                     backgroundRepeat: "no-repeat"
                 }}
            >
                <a href={props.pageLink} target="_blank" className={style.button}>View more</a>
            </div>
            <h3 className={style.projectTitle}>{props.title}</h3>
            <a className={style.gitLink} href={props.gitLink} target="_blank">GitHub repository</a>
            <span className={style.description}>{props.description}</span>

        </div>
    )
}