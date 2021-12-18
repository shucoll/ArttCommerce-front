import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUserOrders } from '@store/actions/orderActions';
import { CLEAR_USER_ORDERS_ERROR } from '@store/actionTypes/orderTypes';
import Spinner from '@components/UI/Spinner/Spinner';
import styles from './MyOrders.module.scss';

const MyOrders = (props) => {
  const dispatch = useDispatch();

  const { userOrders } = useSelector((state) => state);

  const { loading, error, orderList } = userOrders;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        onClose: () =>
          dispatch({
            type: CLEAR_USER_ORDERS_ERROR,
          }),
      });
    }
  }, [error]);

  // if (orderList) console.log(orderList);ß

  return (
    <div className={styles.container}>
      <h1>My Orders</h1>
      {loading ? (
        <Spinner center />
      ) : orderList ? (
        <div className={styles.orders}>
          {orderList.data.data.map((item, index) => (
            <div className={styles.order__card} key={index}>
              <h3>Order No #{index + 1}</h3>
              <div className={styles.order__details}>
                <span>Total Price: {`$${item.totalPrice}`}</span>
                <span>
                  Items:{' '}
                  {item.products.reduce(
                    (total, curr) => total + curr.orderItems.quantity,
                    0
                  )}
                </span>
                <span>
                  Created At:{' '}
                  {new Date(item.createdAt).toLocaleDateString('en-US')}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MyOrders;
