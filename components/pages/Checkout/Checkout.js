import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router';

// import Button from '@components/UI/Button/Button';
import Overview from './Overview/Overview';
import ShippingAddress from './ShippingAddress/ShippingAddress';
import PaymentDetails from './PaymentDetails/PaymentDetails';
import OrderConfirmation from './OrderConfirmation/OrderConfirmation';

import styles from './Checkout.module.scss';

const Checkout = (props) => {
  const { auth } = useSelector((state) => state);
  const { token } = auth;

  const [shippingAddress, setShippingAddress] = useState({});

  // useEffect(() => {
  //   if (!token) router.push('/login');
  // }, [token]);

  const [section, setSection] = useState(1);

  const getShippingAddress = (address) => {
    // console.log(address);
    setShippingAddress(address);
    setSection(3);
  };

  const handleNextClick = () => {
    if (section === 4) return;
    setSection((section) => section + 1);
  };

  // const handleBackClick = () => {
  //   if (section === 1) return;
  //   setSection((section) => section - 1);
  // };

  const stepContent = [
    {
      num: 1,
      name: 'Overview',
    },
    {
      num: 2,
      name: 'Shipping Address',
    },
    {
      num: 3,
      name: 'Payment Details',
    },
    {
      num: 4,
      name: 'Order Confirmation',
    },
  ];

  return (
    <div className={`container ${styles.checkout}`}>
      <div className={styles.stepperContainer}>
        <ul className={styles.stepper}>
          {stepContent.map((item, index) => (
            <li className={styles.stepper__item} key={index}>
              <div
                className={`${styles.step__counter} ${
                  section === item.num ? styles.step__current : null
                }`}
              >
                {item.num}
              </div>
              <div className={styles.step__text}>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      {section === 1 && <Overview next={handleNextClick} />}
      {section === 2 && (
        <ShippingAddress
          shippingAddress={(address) => getShippingAddress(address)}
        />
      )}
      {section === 3 && <PaymentDetails shippingAddress={shippingAddress}/>}
      {section === 4 && <OrderConfirmation />}
    </div>
  );
};

export default Checkout;
