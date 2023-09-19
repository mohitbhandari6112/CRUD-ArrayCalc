import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Address</label>
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditUserForm;
