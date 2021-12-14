import { useSelector } from 'react-redux';

import Check from '@public/svg/check.svg';
import styles from './OrderConfirmation.module.scss';

const OrderConfirmation = (props) => {
  const { order } = useSelector((state) => state);
  const { orderDetails } = order;

  return (
    <div className={styles.container}>
      <Check className={styles.checkMark} />
      <div className={styles.text}>
        Your order for{' '}
        <span
          style={{ fontWeight: 400 }}
        >{`$${orderDetails.data.orderTotal}`}</span>{' '}
        is confirmed. Your artwork is on the way, hope you are as excited as we
        are!
      </div>
    </div>
  );
};

export default OrderConfirmation;
