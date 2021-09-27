import CartIcon from '@public/svg/cart.svg';

import styles from './DrawerToggle.module.scss';

const DrawerToggle = (props) => {
  return (
    <CartIcon className={styles.cart__icon} onClick={props.clicked} />
  );
};

export default DrawerToggle;
