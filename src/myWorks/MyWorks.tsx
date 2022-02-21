import React from "react";
import style from './MyWorks.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Project} from "./Project/Project";
import fon from '../assets/images/fon.jpg'
import fon2 from '../assets/images/fon2.jpg'
import {Title} from "../commond/components/title/Title";



export const MyWorks = () => {

    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={'My works that I did'}
                       sectionTitle={'Portfolio'}
                />
                <div className={style.works}>
                    <Project title={'Project name 1'}
                             description={'Line 11:13:  The href attribute href attribute href attribute href attribute requires a valid value to be accessible. Provide'}
                             backgroundImage={fon}
                    />
                    <Project title={'Project name 2'}
                             description={' If you cannot provide a valid href, but still need the ele'}
                             backgroundImage={fon2}
                    />
                </div>
            </div>
        </div>
    )
}