import React from "react";
import style from './Main.module.scss'
import styleContainer from '../../src/commond/styles/Container.module.css'
import {Title} from "../commond/components/title/Title";
import myPhoto from '../assets/images/my-cropped2.jpg'
import {LincIcon} from "../commond/components/linkIcon/LinkIcon";
import codewars from '../assets/images/icons/codewars3.png'
import linkedin from '../assets/images/icons/linkedin.png'
import portfolio from '../assets/images/icons/web-development.png'
import git from '../assets/images/icons/git.png'


const titleStyle = {
    fontSize: '70px',
}

export const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <Title title={'Roman Larionov'}
                           sectionTitle={'I am'}
                           subtitle={'Frontend Developer'}
                           titleStyle={titleStyle}
                    />
                </div>

                <div className={style.photo} style={
                    {backgroundImage: `url(${myPhoto})`}}>
                </div>
                <div className={style.lickBlock}>
                    <LincIcon title={"Codewars"} url={'https://www.codewars.com/users/Rombeso'}/>
                    <LincIcon title={"Linkedin"} url={'https://www.linkedin.com/in/roman-larionov-60586876/'}/>
                    <LincIcon title={"Telegram"} url={'https://t.me/rombeso'}/>
                    <LincIcon title={"Github"} url={'https://github.com/Rombeso'}/>
                </div>
            </div>
        </div>
    )
}