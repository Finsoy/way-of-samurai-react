import React from "react";
import User from "./User";

const UsersList = ({ users, follow, unFollow }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <User key={user.id} user={user} follow={follow} unFollow={unFollow} />
        );
      })}
    </>
  );
};

export default UsersList;
