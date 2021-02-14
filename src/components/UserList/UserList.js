import React, { useEffect, useState } from "react";
import { useUser } from "../../hooks";
import UserDetail from "../UserDetail/UserDetail";

function UserList() {
  const { getUsers } = useUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserDetail key={user.username} user={user}></UserDetail>
      ))}
    </div>
  );
}

export default UserList;
