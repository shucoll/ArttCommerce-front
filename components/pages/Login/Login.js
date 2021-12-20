import { useState, useRef, useEffect } from 'react';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
// import { toast } from 'react-toastify';

import { login } from '@store/actions/authActions';
// import { CLEAR_AUTH_ERROR } from '@store/actionTypes/authTypes';
import LockIcon from '@public/svg/lock.svg';
import Button from '@components/UI/Button/Button';
import Spinner from '@components/UI/Spinner/Spinner';
import styles from './Login.module.scss';

const Login = (props) => {
  const validator = useRef(new SimpleReactValidator());

  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  const { loading, token } = auth;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [value, setValue] = useState(0); //for forcing re render

  useEffect(() => {
    if (token && router.query.redirect) {
      const currentQuery = router.query;

      if (currentQuery.redirect && currentQuery.redirect === 'checkout') {
        router.push('/checkout');
      }
    } else if (token) {
      router.push('/');
    }
  }, [token]);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, {
  //       onClose: () =>
  //         dispatch({
  //           type: CLEAR_AUTH_ERROR,
  //         }),
  //     });
  //   }
  // }, [error]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (validator.current.allValid()) {
      dispatch(login(email, password));
    } else {
      validator.current.showMessages();
      setValue((value) => value + 1);
    }
  };

  const inputItems = [
    {
      type: 'email',
      placeholder: 'Email',
      id: 'email',
      value: email,
      onChange: handleEmailChange,
      validation: validator.current.message('email', email, 'required|email'),
    },

    {
      type: 'password',
      placeholder: 'Password',
      id: 'password',
      value: password,
      onChange: handlePasswordChange,
      validation: validator.current.message('password', password, 'required'),
    },
  ];

  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.container}>
        <LockIcon className={styles.icon} />
        <h2 className={styles.title}>Login</h2>

        {loading ? (
          <Spinner />
        ) : (
          <form className={styles.form}>
            {inputItems.map((item, index) => (
              <div className={styles.form__inputGroup} key={index}>
                <input
                  type={item.type}
                  className={styles.form__input}
                  placeholder={item.placeholder}
                  id={item.id}
                  value={item.value}
                  onChange={item.onChange}
                />
                {item.validation}
                <label htmlFor={item.id} className={styles.form__inputLabel}>
                  {item.placeholder}
                </label>
              </div>
            ))}
            <Button text='Submit' onClick={handleFormSubmit} type='sec' />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
