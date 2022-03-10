import React, { useRef } from "react";
import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({ updateNewMessageText, sendMessage, dialogsPage }) => {
  const textareaRef = useRef();
  const onMessageSend = () => {
    sendMessage(textareaRef.current.value);
  };

  const onMessageUpdate = (event) => {
    updateNewMessageText(event.target.value);
  };

  return (
    <div className={styles.dialogs}>
      <div>
        {dialogsPage.dialogs.map(({ id, name, imageUrl }) => (
          <DialogItem key={id} name={name} id={id} imageUrl={imageUrl} />
        ))}
      </div>

      <div className={styles.messages}>
        <div>
          {dialogsPage.messages.map(({ message, id }) => (
            <Message key={id} message={message} />
          ))}
        </div>

        <div className={styles.sendMessageWrapper}>
          <textarea
            ref={textareaRef}
            value={dialogsPage.newMessageText}
            onChange={onMessageUpdate}
            cols="30"
            rows="5"
          />
          <button onClick={onMessageSend}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
