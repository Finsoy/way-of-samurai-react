import React from 'react';
import s from './Friends.module.scss'

const Friend = ({name, avatarUrl}) => {
  return (
    <div className={s.item}>
      <img className={s.avatarImg} src={avatarUrl} alt="AVATAR"/>
      <p className={s.name}>{name}</p>
    </div>
  );
};

export default Friend;
