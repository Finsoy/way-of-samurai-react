import React, { useRef } from "react";
import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { actionTypes } from "../../types";

const Dialogs = ({ state, dispatch }) => {
  const postInputRef = useRef(null);

  const handleMessageClick = (event) => {
    console.log("click");
    console.log(postInputRef.current.value);
    dispatch({
      type: actionTypes.ADD_MESSAGE,
      message: postInputRef.current.value,
    });
    postInputRef.current.value = "";
  };

  const handleMessageText = (event) => {
    console.log(event.target.value);
    dispatch({
      type: actionTypes.UPDATE_NEW_MESSAGE_TEXT,
      message: event.target.value,
    });
  };

  return (
    <div className={styles.dialogs}>
      <div>
        {state.dialogs.map(({ id, name, imageUrl }) => (
          <DialogItem key={id} name={name} id={id} imageUrl={imageUrl} />
        ))}
      </div>

      <div className={styles.messages}>
        <div>
          {state.messages.map(({ message, id }) => (
            <Message key={id} message={message} />
          ))}
        </div>

        <div className={styles.sendMessageWrapper}>
          <textarea
            ref={postInputRef}
            value={state.newMessageText}
            onChange={handleMessageText}
            cols="30"
            rows="5"
          />
          <button onClick={handleMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
