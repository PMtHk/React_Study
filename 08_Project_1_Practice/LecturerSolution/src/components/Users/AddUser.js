import React from 'react';

import Card from '../UI/Card';

//css-module
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        {/* htmlFor 는 for의 속성을 할당하는 props 이름 ... for 는 js예약어라 사용할 수 없음 */}
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <button type='submit'>AddUser</button>
      </form>
    </Card>
  );
};

export default AddUser;
