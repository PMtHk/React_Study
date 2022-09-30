import React from 'react';
import Wrapper from '../UI/Wrapper';

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div></div>
      <div>
        <header>
          <h1>{props.title}</h1>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <button type='submit' onClick={props.onConfirm}>
            Okay
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default ErrorModal;
