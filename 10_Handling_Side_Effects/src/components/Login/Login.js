import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT_EMAIL') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT_PW') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(true);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // 보통의 경우 useReducer 보다 useState가 권장된다.

  // useEffect(() => {
  //   console.log('EFFECT RUNNING');

  //   return () => {
  //     console.log('EFFECT CLEANUP');
  //   };
  // }, []);


  // -------------------------------------------------------
  // 유효성 확인에 필요한 것은 value 값이 아니라 isValid 의 값이기 때문에
  // 아래와 같이 객체 분해를 통해 원하는 값만 가져올 수도 있다.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('CHECKING FORM VALIDITY!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500); // debouncing : 타이핑 일시정지 되었을 때 검사하도록 함.

    return () => {
      // cleanup function
      // useEffect 가 내부 함수를 실행되기 전에 클린업 함수가 동작하게 된다.
      // 해당 경우, 따라서, 이전의 모든 타이머를 없애고, 마지막 하나의 타이머만 남겨두도록 한다.
      console.log('CLEANUP!');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT_EMAIL', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    ); 
  };

  // 기존과 같이 하나의 state업데이트를 위해 두개의 다른 state에 의존하는 경우
  // 리액트가 state 업데이트를 스케쥴링 하는 방식으로 인해
  // 문제가 발생할 가능성이 있다.

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT_PW', val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6); 
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid); // 하나의 state에서 서로 다른 state에 대해 메소드를 호출했다. -> 함수 폼 사용규칙 위반.
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword(passwordState.isValid); // 하나의 state에서 서로 다른 state에 대해 메소드를 호출했다. -> 함수 폼 사용규칙 위반.
  };

  // const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn); -> useReducer 기본 폼.

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
