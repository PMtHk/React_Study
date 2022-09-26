import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    { username: 'zooby', age: '25', id: 'id1' },
    { username: 'pmthk', age: '29', id: 'id2' },
  ]);

  const deleteUser = (userId) => {
    setUsers((prev) => {
      const updatedUsers = prev.filter((user) => user.id !== userId);
      return updatedUsers;
    });
  };

  const addUserHandler = (userInfo) => {
    setUsers((prev) => {
      const updatedUsers = [...prev, {...userInfo, id: Math.random().toString()}];
      return updatedUsers

    })

  }

  return (
    <div>
      <UserInput onAddUser={addUserHandler}/>
      <UserList items={users} onDeleteUser={deleteUser} />
    </div>
  );
}

export default App;
