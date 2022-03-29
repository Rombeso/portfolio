import React from "react";
import style from './MyWorks.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Project} from "./Project/Project";
import socialNetwork from '../assets/images/projects/sn.jpg'
import todoList from '../assets/images/projects/td.jpg'
import cards from '../assets/images/projects/cards.jpg'
import {Title} from "../commond/components/title/Title";



export const MyWorks = () => {

    return (
        <div id={"projects"} className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={'My works that I did'}
                       sectionTitle={'Portfolio'}
                />
                <div className={style.works}>
                    <Project title={'Social Network'}
                             description={'Technologies: JavaScript, TypeScript, Tailwind, React, Redux, Thunk, Redux Form, Axios, Unit testing, Bug fixing, deploying.'}
                             backgroundImage={socialNetwork}
                             pageLink={'https://rombeso.github.io/SocialNetwork/'}
                             gitLink={'https://github.com/Rombeso/SocialNetwork'}
                    />
                    <Project title={'Todo List'}
                             description={'Technologies: JavaScript, TypeScript, Material UI, React, Redux, Thunk, Formic, Axios, Redux Toolkit, Unit testing, Bug fixing, deploying.'}
                             backgroundImage={todoList}
                             pageLink={'https://rombeso.github.io/TodoList/'}
                             gitLink={'https://github.com/Rombeso/TodoList'}
                    />
                    <Project title={'Memorization Cards'}
                             description={'Technologies: CSS, JavaScript, TypeScript, React, Redux, Thunk, React Hook Form, Axios, Redux Toolkit, Unit testing, Bug fixing, deploying.'}
                             backgroundImage={cards}
                             pageLink={'https://foxside.github.io/friday-project/'}
                             gitLink={'https://github.com/FoxSide/friday-project'}
                    />
                </div>
            </div>
        </div>
    )
}