import React from "react";
import style from './Skills.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Skill} from "./skill/Skill";
import react from '../assets/images/skills/React.png'
import redux from '../assets/images/skills/Redux.b42554ad.png'
import typescript from '../assets/images/skills/TS.21f37087.png'
import {Title} from "../commond/components/title/Title";
import javascript from '../assets/images/skills/JS.d0cf7cec.png'
// import  from '../assets/images/skills'
// import  from '../assets/images/skills'

export const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My professional skills'} sectionTitle={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} urlIcon={react}/>
                    <Skill title={'Redux'} urlIcon={redux}/>
                    <Skill title={'TypeScript'} urlIcon={typescript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                    <Skill title={'JavaScript'} urlIcon={javascript}/>
                </div>
            </div>
        </div>
    )
}