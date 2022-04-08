import React from "react";
import style from './Skills.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import {Title} from "../commond/components/title/Title";

export const Skills = () => {

    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My professional skills'} sectionTitle={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} width="150" height="150"/>
                    <Skill title={'Redux'} width="150" height="150"/>
                    <Skill title={'TypeScript'} width="150" height="150"/>
                    <Skill title={'JavaScript'} width="150" height="150"/>
                    <Skill title={'HTML'} width="150" height="150"/>
                    <Skill title={'CSS'} width="150" height="150"/>
                    <Skill title={'SASS'} width="150" height="150"/>
                    <Skill title={'Formik'} width="150" height="150"/>
                    <Skill title={'Jest'} width="150" height="150"/>
                    <Skill title={'Git'} width="150" height="150"/>
                </div>
            </div>
        </div>
    )
}