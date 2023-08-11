import React, { useState } from "react";

const UserInput = ({ addName }) => {
  const [name, setName] = useState("");
  
  const updateName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addName(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new name here..."
        value={name}
        onChange={updateName}
      />
      <input type="submit" value="Create Name Tag" />
    </form>
  );
}

export default UserInput;
