import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [title, setTitle] = new useState('');
  // const [amount, setAmount] = new useState('');
  // const [date, setDate] = new useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  // 기술적으로 문제는 없지만, 이렇게 하나의 state로 사용하는 경우, 특정 사례에
  // 문제가 생길수 있다.

  // handler
  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
      // 프로젝트가 더 커질수록 이와 같이 사용하는 것이 좋다.
    });
  };
  // 위와 같이 작성하면, state를 업데이트 하는데 이전 state(prevState)에 의존하게 된다.
  // 반드시 알아둘 내용은, 이전 state에 의존하며 state를 업데이트 하는 경우에,
  // (위와 같은 프로젝트나 카운터를 이용하는 경우도 포함함)
  // 위와 같이 불러온 후 오버라이딩 하지 않고, callback 함수를 전달하고,
  // 여기서, prevState로 이전 state의 스냅샷을 받고 새 스냅샷을 반환하자!

  // 리액트는 상태 업데이트 스케줄을 가지고 있어서 state 업데이트를 바로 실행하지 않는다.
  // 따라서, 이론적으로 많은 상태 업데이트를 스케쥴 한다면, 주석처리된 방식으로 하면
  // outdated(오래된) state의 스냅샷이나, 부정확한 스냅샷에 의존하게 될 수 있다.

  // 아래처럼 콜백함수로 전달하게 되면, 항상 최신 상태의 스냅샷에 의존하여 state를 업데이트 할 수 있다.

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
      // 프로젝트가 더 커질수록 이와 같이 사용하는 것이 좋다.
    });
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
      // 프로젝트가 더 커질수록 이와 같이 사용하는 것이 좋다.
    });
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value);
  // };

  // const dateChangeHandler = (event) => {
  //   setDate(event.target.value);
  // };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2024-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      {/* <h1>{userInput.title}</h1>
      <h1>{userInput.amount}</h1>
      <h1>{userInput.date}</h1> */}

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
