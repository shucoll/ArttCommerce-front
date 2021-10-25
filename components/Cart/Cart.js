import { useState } from 'react';
import CloseIcon from '@public/svg/close-line.svg';
import AddIcon from '@public/svg/add.svg';
import SubtractIcon from '@public/svg/subtract.svg';
import Button from '@components/UI/Button/Button';
import styles from './Cart.module.scss';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([
    {
      name: 'Item 1',
      price: '$100',
      img: '/img/l1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 1',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 7',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 8',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 9',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 10',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 11',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
    {
      name: 'Item 12',
      price: '$50',
      img: '/img/m1.jpg',
      quantity: '1',
    },
  ]);

  const handleCartItemChange = (item) => {
    
  };

  const handleCartItemRemove = (item) => {

  }

  return (
    <div className={styles.cart}>
      <h2 style={{ padding: '0 2rem' }}>My Cart</h2>
      <ul className={styles.cart__items}>
        {cartItems.map((item, index) => (
          <li className={styles.cart__item} key={index}>
            <div className={styles.cart__item__row1}>
              <div className={styles.cart__item__imgNameContainer}>
                <div className={styles.cart__item__imgContainer}>
                  <img src={item.img} className={styles.cart__item__img} />
                </div>
                <span className={styles.cart__item__name}>{item.name}</span>
              </div>
              <span>{item.price}</span>
            </div>
            <div className={styles.cart__item__row2}>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__removeButton}`}
              >
                <CloseIcon className={styles.cart__item__removeIcon} />
              </button>
              <input
                type='number'
                className={styles.cart__item__input}
                value={item.quantity}
              ></input>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__actionButton}`}
              >
                <AddIcon className={styles.cart__item__actionIcon} />
              </button>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__actionButton}`}
              >
                <SubtractIcon className={styles.cart__item__actionIcon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.cart__calc}>
        <div className={styles.cart__calc__items}>
          <span>Subtotal</span>
          <span>$120</span>
        </div>
        <div className={styles.cart__calc__items}>
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <hr />
        <div className={styles.cart__calc__items}>
          <span>Total</span>
          <span>$120</span>
        </div>
        <Button text='PROCEED TO CHECKOUT' type='sec' />
      </div>
    </div>
  );
};

export default Cart;
