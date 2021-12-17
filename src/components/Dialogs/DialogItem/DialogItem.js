import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name, imageUrl}) => {
  let path = `/dialogs/${id}`

  return (
    <div className={s.dialogsItem}>
      <img className={s.dialogAvatar} src={imageUrl} alt={`${name}-avatar`}/>
      <NavLink className={s.dialog} activeClassName={s.active} to={path}>{name}</NavLink>
    </div>
  )
}

export default DialogItem;