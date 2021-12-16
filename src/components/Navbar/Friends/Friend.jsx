import React from 'react';
import s from './Friends.module.css'

const Friend = ({name, avatarUrl}) => {
  return (
    <div className={s.item}>
      <img className={s.avatarImg} src={avatarUrl} alt="AVATAR"/>
      <p>{name}</p>
    </div>
  );
};

export default Friend;
