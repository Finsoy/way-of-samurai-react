import React from "react";
import UsersList from "./UsersList";
import { useDispatch, useSelector } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUserCount,
  setTotalUserCountAC,
  setUsersAC,
  unFollowAC,
} from "../../redux/users-reducer";

const UsersContainer = () => {
  const { users, pageSize, totalUserCount, currentPage } = useSelector(
    (state) => state.usersPage
  );
  const dispatch = useDispatch();

  const follow = (userId) => {
    dispatch(followAC(userId));
  };

  const unFollow = (userId) => {
    dispatch(unFollowAC(userId));
  };

  const setUsers = (users) => {
    dispatch(setUsersAC(users));
  };

  const setCurrentPage = (page) => {
    dispatch(setCurrentPageAC(page));
  };

  const setTotalUserCount = (totalUserCount) => {
    dispatch(setTotalUserCountAC(totalUserCount));
  };

  return (
    <>
      <UsersList
        users={users}
        follow={follow}
        unFollow={unFollow}
        setUsers={setUsers}
        pageSize={pageSize}
        totalUserCount={totalUserCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTotalUserCount={setTotalUserCount}
      />
    </>
  );
};

export default UsersContainer;
