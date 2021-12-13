import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import router from 'next/router';

// import { createOrder } from '@store/actions/orderActions';

import Button from '@components/UI/Button/Button';
import styles from './Overview.module.scss';

const Overview = (props) => {
  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;
  // const { token } = auth;

  // const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  };

  // useEffect(() => {
  //   if (!token) router.push('/login');
  // }, [token]);

  // const handleCheckout = () => {
  //   console.log(cartItems);
  //   dispatch(
  //     createOrder({ orderItems: cartItems, totalPrice: calculateTotal() })
  //   );
  // };

  return (
    <div className={`container ${styles.overview}`}>
      <ul className={styles.list}>
        {cartItems.map((item) => (
          <li className={styles.list__item}>
            <div className={styles.list__item__imgContainer}>
              <img src={item.image} className={styles.list__item__img} />
            </div>
            <div className={styles.list__item__info}>
              <h4>{item.name}</h4>
              <span>{`$${item.price}`}</span>
              <span>x{item.quantity}</span>
              <span style={{ alignSelf: 'flex-end' }}>{`$${
                item.price * item.quantity
              }`}</span>
              {/* <div className={styles.list__item__info_calc}></div> */}
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.calc}>
        <h2>Total</h2>
        <div className={styles.calc__items}>
          <span>Subtotal</span>
          <span>{`$${calculateTotal()}`}</span>
        </div>
        <div className={styles.calc__items}>
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <hr />
        <div className={styles.calc__items}>
          <span>Total</span>
          <span>{`$${calculateTotal()}`}</span>
        </div>
        <Button text='PROCEED' type='sec' onClick={props.next} fullWidth />
      </div>
    </div>
  );
};

export default Overview;
