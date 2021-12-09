import React from 'react'
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={`${styles.active} ${styles.dialog}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Vadim' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Lera' id='4'/>
                <DialogItem name='Anton' id='5'/>
            </div>

            <div className={styles.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='My friend'/>
            </div>
        </div>
    )
}

export default Dialogs;
