import {useState} from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const ContactForm = () => {
   const[name,setName]=useState("Ansh");
   const[email,setEmail]=useState("12212042@nitkkr.ac.in");
   const[text,setText]=useState("hello world");

    const onSubmit=(event)=>{
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
    return (
        <section className={`${styles.container}`}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="20px" />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMdMail fontSize="23px" />} />
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea rows="8" name="text" />
                    </div>
                    <div style={{
                        display:"flex",
                        justifyContent:"end"
                    }}>
                        <Button text="SUBMIT" />
                    </div>
                    <div>{name + "  "+ email+"  "+ text}</div>
                </form>

            </div>
            <div className={styles.contact_image}>
                <img src="/images/service.svg" alt="service" />
            </div>
        </section>
    )
}

export default ContactForm
