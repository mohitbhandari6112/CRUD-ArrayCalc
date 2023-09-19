import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const UsersApp = () => {
  // Data
  const usersData = [
    { id: 1, name: "nishesh", address: "hetauda" },
    { id: 2, name: "sushant", address: "ktm" },
    { id: 3, name: "zalan", address: "btwl" },
  ];

  const initialFormState = { id: null, name: "", address: "" };

  // Setting states
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  //performing operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, address: user.address });
  };

  return (
    <div className="container">
      <h1>Managing objects</h1>
      <div>
        {editing ? (
          <Fragment>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      <div>
        <h2>View users</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default UsersApp;
