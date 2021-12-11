import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages}) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>)}
      </div>

      <div className={styles.messages}>
        <div className={styles.dialogsItem}>
          {messages.map(({message, id}) => <Message key={id} message={message} />)}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
