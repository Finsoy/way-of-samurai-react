import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state}) => {
  return (
    <div className={styles.dialogs}>
      <div>
        {state.dialogs.map(({id, name, imageUrl}) => <DialogItem key={id} name={name} id={id} imageUrl={imageUrl}/>)}
      </div>

      <div className={styles.messages}>
        <div>
          {state.messages.map(({message, id}) => <Message key={id} message={message} />)}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
