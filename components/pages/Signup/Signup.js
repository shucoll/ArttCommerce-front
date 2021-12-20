import { useState, useRef, useEffect } from 'react';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '@store/actions/authActions';
import SimpleReactValidator from 'simple-react-validator';
import LockIcon from '@public/svg/lock.svg';
import Button from '@components/UI/Button/Button';
import Spinner from '@components/UI/Spinner/Spinner';
import styles from './Signup.module.scss';

const Signup = (props) => {
  const validator = useRef(new SimpleReactValidator());

  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);
  const { loading, token } = auth;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [value, setValue] = useState(0); //for forcing re render

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const inputItems = [
    {
      type: 'name',
      placeholder: 'Name',
      id: 'name',
      value: name,
      onChange: handleNameChange,
      validation: validator.current.message('name', name, 'required'),
    },
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

    {
      type: 'password',
      placeholder: 'Password Confirm',
      id: 'passwordConfirm',
      value: passwordConfirm,
      onChange: handlePasswordConfirmChange,
      validation: validator.current.message(
        'passwordConfirm',
        password,
        'required'
      ),
    },
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      password,
      passwordConfirm,
    };

    if (validator.current.allValid()) {
      dispatch(signup(formData));
    } else {
      validator.current.showMessages();
      setValue((value) => value + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LockIcon className={styles.icon} />
        <h2 className={styles.title}>Signup</h2>
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

export default Signup;
