import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '@components/UI/Spinner/Spinner';
import styles from './MyAccount.module.scss';

const MyAccount = (props) => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const { loading, error, userInfo } = auth;

  console.log(userInfo);

  return (
    <div className={styles.container}>
      <h1>My Account</h1>
    </div>
  );
};

export default MyAccount;
