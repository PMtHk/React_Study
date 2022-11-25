import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},  // 추가를 위한 업데이트 함수
  removeItem: (id) => {}, // 삭제를 위한 업데이트 함수
});

export default CartContext;