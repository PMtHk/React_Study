// context

import React from 'react';
/*
  리액트 내부적으로 state를 관리할 수 있도록 한다. 
  어떤 컴포넌트에라도 직접 변경 및 다른 컴포넌트에 직접 전달 가능
*/
const AuthContext = React.createContext({
  isLoggedIn: false,
}); // 보통 object

export default AuthContext;
