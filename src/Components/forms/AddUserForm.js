import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", address: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
    // console.log(name, value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.address) return;

        props.addUser(user);
        //resetting the form after submitting
        setUser(initialFormState);
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
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
