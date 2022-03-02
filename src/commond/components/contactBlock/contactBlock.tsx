import style from "../../components/contactBlock/contactBlock.module.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

type PropsType ={
    title:string,
    text:string,
    icon:IconDefinition,
}

export const ContactBlock = (props: PropsType) => {
    return (
        <div className={style.contactBlock}>
            <div className={style.imageBlock}>
                <div className={style.image}>
                <FontAwesomeIcon icon={props.icon} size="2x" inverse/>
                </div>
            </div>
            <div className={style.description}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.text}>{props.text}</span>
            </div>

        </div>
    )
}

