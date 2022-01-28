import React from "react";
import style from './Skills.module.css'
import styleContainer from "../commond/styles/Container.module.css";
import {Skill} from "./skill/Skill";


export const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My technologies</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'Line 11:13:  The href attribute requires a valid value to be accessible. Provide'}/>
                    <Skill title={'CSS'} description={' If you cannot provide a valid href, but still need the ele'}/>
                    <Skill title={'React'} description={'link, use a button and change it with appropriate styles'}/>
                </div>
            </div>
        </div>
    )
}