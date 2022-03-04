import React, { useRef } from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state }) => {
  const postInputRef = useRef(null);

  const handleMessageClick = (event) => {
    console.log('click');
    console.log(postInputRef.current.value);
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
          <textarea ref={postInputRef} cols="30" rows="5"></textarea>
          <button onClick={handleMessageClick}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
