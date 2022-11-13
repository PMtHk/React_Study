import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>합계</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>닫기</button>
        <button className={classes.button}>주문하기</button>
      </div>
    </Modal>
  );
};

export default Cart;
