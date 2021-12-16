import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state}) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {state.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>)}
      </div>

      <div className={styles.messages}>
        <div className={styles.dialogsItem}>
          {state.messages.map(({message, id}) => <Message key={id} message={message} />)}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
