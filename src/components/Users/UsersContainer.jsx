import React from "react";
import UsersList from "./UsersList";
import { useDispatch, useSelector } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/users-reducer";

const UsersContainer = () => {
  const { users } = useSelector((state) => state.usersPage);
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

  console.log(users);
  return (
    <>
      <UsersList
        users={users}
        follow={follow}
        unFollow={unFollow}
        setUsers={setUsers}
      />
    </>
  );
};

export default UsersContainer;
