// context

import React, { useState, useEffect } from 'react';
/*
  리액트 내부적으로 state를 관리할 수 있도록 한다. 
  어떤 컴포넌트에라도 직접 변경 및 다른 컴포넌트에 직접 전달 가능
*/
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
}); // 보통 object

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
