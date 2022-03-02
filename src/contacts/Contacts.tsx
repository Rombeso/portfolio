import React from "react";
import style from './Contacts.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Title} from "../commond/components/title/Title";
import {ContactBlock} from "../commond/components/contactBlock/contactBlock";
import {faPhone, faAt, faPaperPlane} from "@fortawesome/free-solid-svg-icons";


export const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'I would like to find full-time employment'} sectionTitle={'Contact Me'}/>
                <div className={style.contacts}>
                    <div className={style.myContacts}>
                        <div className={style.myContactsBlock}>
                            <ContactBlock title={"Phone"} text={"+7964 410 6370"} icon={faPhone}/>
                            <ContactBlock title={"E-mail"} text={"larionovra@gmail.com"} icon={faAt}/>
                            <ContactBlock title={"Telegram"} text={"@rombeso"} icon={faPaperPlane}/>

                        </div>
                    </div>
                    <div className={style.formContacts}>
                        <form action={''} className={style.form}>
                            <input type="text" name="name" placeholder={'Name:'} className={style.input}/>
                            <input type="text" name="company" placeholder={'Company:'} className={style.input}/>
                            <textarea placeholder={'About your offer:'} className={style.textarea}></textarea>
                            <button className={style.button}>SUBMIT NOW</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}