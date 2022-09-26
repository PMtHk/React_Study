import React from 'react';
import User from './User';

const UserList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.items.map((aUser) => (
        <User key={aUser.id} id={aUser.id} onDelete={props.onDeleteUser}>
          {aUser.username} ({aUser.age} years old)
        </User>
      ))}
    </ul>
  );
};

export default UserList;
