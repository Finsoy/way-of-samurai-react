import React from 'react';
import s from './Friends.module.scss';
import Friend from './Friend';

const Friends = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Friends</h3>
      {friends.map((friend) => (
        <Friend
          key={friend.avatarUrl + Date.now() * Math.random()}
          name={friend.name}
          avatarUrl={friend.avatarUrl}
        />
      ))}
    </div>
  );
};

export default Friends;
