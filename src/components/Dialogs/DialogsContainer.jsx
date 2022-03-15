import React, { useRef } from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux";

const DialogsContainer = () => {
  const store = useSelector((state) => state.dialogsPage);
  const dispatch = useDispatch();
  const onMessageSend = (message) => {
    dispatch(addMessageActionCreator(message));
  };

  const onMessageUpdate = (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageUpdate}
      sendMessage={onMessageSend}
      dialogsPage={store}
    />
  );
};

export default DialogsContainer;
