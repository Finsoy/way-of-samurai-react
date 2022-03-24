import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";
import style from "./User.module.scss";
import { setTotalUserCount } from "../../redux/users-reducer";
import Pagination from "../Pagination/Pagination";

const UsersList = ({
  users,
  follow,
  unFollow,
  setUsers,
  pageSize,
  totalUserCount,
  currentPage,
  setCurrentPage,
  setTotalUserCount,
}) => {
  useEffect(() => {
    if (totalUserCount === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`
        )
        .then((data) => {
          setTotalUserCount(data.data.totalCount);
        });
    }
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`
      )
      .then((data) => {
        setUsers(data.data.items);
      });
  }, [currentPage]);

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.userListWrapper}>
      {users.length ? (
        users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              follow={follow}
              unFollow={unFollow}
            />
          );
        })
      ) : (
        <h1>Users not found...</h1>
      )}
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UsersList;
