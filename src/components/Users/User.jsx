import React from "react";
import style from "./User.module.scss";

const User = ({ user, follow, unFollow }) => {
  return (
    <div className={style.userWrapper}>
      <div className={style.userAvatar}>
        {user.photos.small ? (
          <img src={user.photos.small} alt="avatar" />
        ) : (
          <div className={style.defaultAvatar} />
        )}
        <button
          className={style.follow}
          onClick={() => (user.followed ? unFollow(user.id) : follow(user.id))}
        >
          {user.followed ? "unfollow" : "follow"}
        </button>
      </div>

      <div className={style.userInfo}>
        <div className={style.name}>
          <h2>{user.name}</h2>
          <p className={style.status}>{user.status}</p>
        </div>
        <div className={style.location}>
          {"user.location.country"},
          <br />
          {"user.location.city"}
        </div>
      </div>
    </div>
  );
};

export default User;
