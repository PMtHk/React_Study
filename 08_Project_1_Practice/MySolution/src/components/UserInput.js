import React, { useState } from 'react';
import ErrorModal from './Modals/ErrorModal';
import Wrapper from './UI/Wrapper';

const UserInput = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const [error, setError] = useState(null);

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Username and Age Cannot be blank.',
      });
      return null;
    }

    if (parseInt(age.trim()) < 1) {
      setError({
        title: 'Invalid Input',
        message: 'Age must be greater than 0',
      });
    }
    const userInfo = { username: username, age: age };
    props.onAddUser(userInfo);
  };

  const ModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={ModalHandler}
          title={error.title}
          message={error.message}
        />
      )}
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
    </Wrapper>
  );
};

export default UserInput;
