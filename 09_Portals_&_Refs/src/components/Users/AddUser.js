import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

//css-module
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // state for ErrorModal
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      // 두 input 중 하나라도 비어있으면 동작 하지 않도록 함.
      return;
    }

    if (parseInt(enteredUserAge) < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (age must be greater than 0).',
      });
      // 입력된 나이가 1보다 작다면 동작 하지 않도록 함.
      return;
    }

    //adding users on App.js lists
    props.onAddUser(enteredName, enteredUserAge);


    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    // 위와 같이 초기화 하는 방법은 흔히 쓰이지 않는다.
    // DOM을 조작하기 위해 ref를 사용하는 방식은 거의 사용되지 않는다.

    // 값만 읽는 상황이라면 ref 를 사용하는 방식이 더 좋다.
    // 개발자가 상황에 맞는 방식을 이용하면 된다.
  };

  const errorHandler =() =>{
    setError(null); // null is falsy value
  }

  return (
    // Modal이 논리적으로 컴포넌트 트리에서 가능한 한 높은 위치 (App.js) 에 위치해야한다는 주장도 있고
    // AddUser 가 트기거가 되니, AddUser에 위치해야 한다는 주장도 있다.
    // 하나를 적절한 논리에 맞게 선택하고 사용하자.
    <Wrapper>
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

          {/* 아래와 같이 ref로 값에 접근하는 경우, 제어되지 않은 컴포넌트 (uncontrolled components) 라 한다. 
            내부 state이기 때문에 이 내부 값들은 리액트에 의해 제어되지 않는다. */}
          <input
            id='username'
            type='text'
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type='submit'>AddUser</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
