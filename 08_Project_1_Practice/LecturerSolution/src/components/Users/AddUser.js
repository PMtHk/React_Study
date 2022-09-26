import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

//css-module
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    // css-module 의 경우 사용자 지정 컴포넌트의 경우 그 안에서는 props 를 통해서만 동작한다.
    // 따라서, 상위 컴포넌트(Card.js)에서 className 속성으로 받아들여서 처리할 수 있도록 해아한다.
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        {/* htmlFor 는 for의 속성을 할당하는 props 이름 ... for 는 js예약어라 사용할 수 없음 */}
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <Button type='submit'>AddUser</Button>
      </form>
    </Card>
  );
};

export default AddUser;