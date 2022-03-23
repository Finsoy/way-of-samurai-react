import React from "react";
import User from "./User";
import axios from "axios";

const UsersList = ({ users, follow, unFollow, setUsers }) => {
  console.log(users);
  if (!users.length) {
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/users?count=10&page=69"
      )
      .then((data) => setUsers(data.data.items));
  }

  return (
    <>
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
    </>
  );
};

export default UsersList;
