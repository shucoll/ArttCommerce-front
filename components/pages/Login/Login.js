import { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import LockIcon from '@public/svg/lock.svg';
import Button from '@components/UI/Button/Button';
import styles from './Login.module.scss';

const Login = (props) => {
  const validator = useRef(new SimpleReactValidator());

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [value, setValue] = useState(0); //for forcing re render

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    if (validator.current.allValid()) {
      try {
        console.log(formData);
      } catch (err) {}
    } else {
      validator.current.showMessages();
      setValue((value) => value + 1);
    }
  };

  return (
    <div className={`${styles.wrapper} container`}>
      <LockIcon className={styles.icon}/>
      <h2 className={styles.title}>Login</h2>
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
    </div>
  );
};

export default Login;
