import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

//css-module
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  // state for modal
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      // 두 input 중 하나라도 비어있으면 동작 하지 않도록 함.
      return;
    }

    if (parseInt(enteredAge) < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (age must be greater than 0).',
      });
      // 입력된 나이가 1보다 작다면 동작 하지 않도록 함.
      return;
    }

    //adding users on App.js lists
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler =() =>{
    setError(null); // null is falsy value
  }

  return (
    // Modal이 논리적으로 컴포넌트 트리에서 가능한 한 높은 위치 (App.js) 에 위치해야한다는 주장도 있고
    // AddUser 가 트기거가 되니, AddUser에 위치해야 한다는 주장도 있다.
    // 하나를 적절한 논리에 맞게 선택하고 사용하자.
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
      )}
      {/* // css-module 의 경우 사용자 지정 컴포넌트의 경우 그 안에서는 props 를
      통해서만 동작한다. // 따라서, 상위 컴포넌트(Card.js)에서 className
      속성으로 받아들여서 처리할 수 있도록 해아한다. */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          {/* htmlFor 는 for의 속성을 할당하는 props 이름 ... for 는 js예약어라 사용할 수 없음 */}
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>AddUser</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
