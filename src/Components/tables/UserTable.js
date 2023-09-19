import React from "react";

const UserTable = (props) => (
  <table style={{ marginLeft: "25px", border: "2px solid black" }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
