import { useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '@store/actions/orderActions';
import Spinner from '@components/UI/Spinner/Spinner';
import Button from '@components/UI/Button/Button';

import styles from './CheckoutForm.module.scss';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const { cart, order } = useSelector((state) => state);
  const { cartItems } = cart;

  const { loading, orderDetails } = order;

  useEffect(() => {
    if (orderDetails) {
      props.next();
    }
  }, [orderDetails]);

  const calculateTotal = () => {
    return cartItems.reduce((prev, cur) => prev + cur.quantity * cur.price, 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      dispatch(
        createOrder({
          shippingAddress: props.shippingAddress,
          orderItems: cartItems,
          totalPrice: calculateTotal(),
          transaction_id: id,
        })
      );
    } else {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {loading ? (
        <div style={{alignSelf: 'center'}}>
          <Spinner />
        </div>
      ) : (
        <>
          <CardElement />
          <div className={styles.total}>
            <h3>Total Amount - {`$${calculateTotal()}`}</h3>
          </div>
          <Button text='Pay Now' type='sec' fullWidth />
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
