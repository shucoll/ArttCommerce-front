import CartIcon from '@public/svg/cart.svg';
import { useSelector } from 'react-redux';

import styles from './DrawerToggle.module.scss';

const DrawerToggle = (props) => {
  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;

  return (
    <div className={styles.container}>
      <CartIcon className={styles.cart__icon} onClick={props.clicked} />
      <span className={styles.number}>{cartItems.length}</span>
    </div>
  );
};

export default DrawerToggle;
