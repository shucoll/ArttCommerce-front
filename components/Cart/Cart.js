import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@store/actions/cartActions';

import CloseIcon from '@public/svg/close-line.svg';
import AddIcon from '@public/svg/add.svg';
import SubtractIcon from '@public/svg/subtract.svg';
import Button from '@components/UI/Button/Button';
import styles from './Cart.module.scss';

const Cart = (props) => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;

  // console.log(cart.cartItems);

  const handleCartItemChange = (item, action) => {
    if (action == 'add') dispatch(addToCart(item, item.qty + 1));
    else if (action == 'subtract' && item.qty > 1)
      dispatch(addToCart(item, item.qty - 1));
  };

  const handleCartItemRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((prev, cur) => prev + cur.qty * cur.price, 0);
  };

  return (
    <div className={styles.cart}>
      <h2 style={{ padding: '0 2rem' }}>My Cart</h2>
      <ul className={styles.cart__items}>
        {cartItems.map((item, index) => (
          <li className={styles.cart__item} key={index}>
            <div className={styles.cart__item__row1}>
              <div className={styles.cart__item__imgNameContainer}>
                <div className={styles.cart__item__imgContainer}>
                  <img src={item.image} className={styles.cart__item__img} />
                </div>
                <span className={styles.cart__item__name}>{item.name}</span>
              </div>
              <span>{`$${item.price}`}</span>
            </div>
            <div className={styles.cart__item__row2}>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__removeButton}`}
                onClick={() => handleCartItemRemove(item)}
              >
                <CloseIcon className={styles.cart__item__removeIcon} />
              </button>
              <input
                type='number'
                className={styles.cart__item__input}
                value={item.qty}
                readOnly
              ></input>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__actionButton}`}
                onClick={() => handleCartItemChange(item, 'add')}
              >
                <AddIcon className={styles.cart__item__actionIcon} />
              </button>
              <button
                className={`${styles.cart__item__button} ${styles.cart__item__actionButton}`}
                onClick={() => handleCartItemChange(item, 'subtract')}
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
          <span>{`$${calculateTotal()}`}</span>
        </div>
        <div className={styles.cart__calc__items}>
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <hr />
        <div className={styles.cart__calc__items}>
          <span>Total</span>
          <span>{`$${calculateTotal()}`}</span>
        </div>
        <Button text='PROCEED TO CHECKOUT' type='sec' />
      </div>
    </div>
  );
};

export default Cart;
