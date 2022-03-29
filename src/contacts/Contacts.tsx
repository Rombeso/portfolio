import React, {ChangeEvent, ChangeEventHandler, FormEvent, useState} from "react";
import style from './Contacts.module.scss'
import styleContainer from "../commond/styles/Container.module.css";
import {Title} from "../commond/components/title/Title";
import {ContactBlock} from "../commond/components/contactBlock/contactBlock";
import {faPhone, faAt, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export const Contacts = () => {

    const [state, setState] = useState({})


    const handleInputChange = (e: (ChangeEvent<HTMLInputElement & HTMLTextAreaElement>)) => {
        // e.preventDefault()
        //   const target = e.;
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;

        setState({
            ...state,
            [name]: value
        });
        console.log(state)
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(state)
        axios.post("https://smtp-server-myportfolio.herokuapp.com/sendMessage", state)
            .then(() => {
                alert('Your massage has been send')
            })
    }
    return (
        <div id={"contacts"} className={style.contactsBlock}>
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
                        <form action={''} className={style.form} onSubmit={handleSubmit}>
                            <input onChange={handleInputChange} type="text" name="name" placeholder={'Name:'}
                                   className={style.input}/>
                            <input onChange={handleInputChange} type="text" name="company" placeholder={'Company:'}
                                   className={style.input}/>
                            <textarea onChange={handleInputChange} name="message" placeholder={'About offer and your contacts:'}
                                      className={style.textarea}></textarea>
                            <button className={style.button}>SUBMIT NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}