import React, { useState } from 'react';

const UserInput = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      return;
    }
    const userInfo = { username: username, age: age };
    props.onAddUser(userInfo);
  };

  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={usernameInputHandler} />
      </div>
      <div>
        <label>Age</label>
        <input
          type='number'
          value={age}
          min='0'
          max='120'
          step='1'
          onChange={ageInputHandler}
        />
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
};

export default UserInput;
