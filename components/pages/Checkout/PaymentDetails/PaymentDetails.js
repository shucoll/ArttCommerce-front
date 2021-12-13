import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm/CheckoutForm';
import styles from './PaymentDetails.module.scss';

const PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLIC_KEY;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const PaymentDetails = (props) => {
  return (
    <div className={styles.container}>
      <Elements stripe={stripeTestPromise}>
        <h3 className='h3' style={{ textAlign: 'center' }}>
          Payment Details
        </h3>
        <CheckoutForm shippingAddress={props.shippingAddress} />
      </Elements>
    </div>
  );
};

export default PaymentDetails;
