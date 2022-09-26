import React from 'react';

const User = (props) => {
  const deleteUserHandler = () => {
    props.onDelete(props.id);
  };
  return <li onClick={deleteUserHandler}>{props.children}</li>;
};

export default User;
