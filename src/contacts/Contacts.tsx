import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../commond/styles/Container.module.css";


export const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form action={''} className={style.form}>
                        <input type="text" name="name" placeholder={'Name:'} className={style.input}/>
                        <input type="text" name="company" placeholder={'Company:'} className={style.input}/>
                        <textarea rows={10} placeholder={'About your offer:'} ></textarea>
                        <input type="submit" value="Отправить" className={style.button}/>
                    </form>
            </div>
        </div>
    )
}