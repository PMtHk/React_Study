import React from 'react';

//css
import classes from './Card.module.css';

const Card = (props) => {
  // css-module 의 경우 사용자 지정 컴포넌트의 경우 그 안에서는 props 를 통해서만 동작한다.
  // 따라서, 상위 컴포넌트에서 className 속성으로 받아들여서 처리할 수 있도록 해아한다.
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
