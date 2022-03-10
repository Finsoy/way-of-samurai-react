import React, { useRef } from "react";
import styles from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  const state = store.getState().dialogsPage;
  const onMessageSend = (message) => {
    store.dispatch(addMessageActionCreator(message));
  };

  const onMessageUpdate = (text) => {
    store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageUpdate}
      sendMessage={onMessageSend}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
