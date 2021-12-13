import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '@components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '@store/actions/orderActions';

import styles from './CheckoutForm.module.scss';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);
  const { cartItems } = cart;

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
      // console.log('Stripe 23 | token generated!', paymentMethod);
      const { id } = paymentMethod;

      dispatch(
        createOrder({
          shippingAddress: props.shippingAddress,
          orderItems: cartItems,
          totalPrice: calculateTotal(),
          transaction_id: id,
        })
      );

      //send token to backend here
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <CardElement />
      <div className={styles.total}>
        <h3>Total Amount - {`$${calculateTotal()}`}</h3>
      </div>
      <Button text='Pay Now' type='sec' fullWidth />
    </form>
  );
};

export default CheckoutForm;
