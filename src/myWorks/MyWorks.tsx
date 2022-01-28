import React from "react";
import style from './MyWorks.module.css'
import styleContainer from "../commond/styles/Container.module.css";
import {Project} from "./Project/Project";
import fon from '../../src/images/fon.jpg'
import fon2 from '../../src/images/fon2.jpg'


export const MyWorks = () => {

    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Project title={'Project name 1'}
                             description={'Line 11:13:  The href attribute requires a valid value to be accessible. Provide'}
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