import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateMe, updateMyPassword } from '@store/actions/authActions';
import Spinner from '@components/UI/Spinner/Spinner';
import styles from './MyAccount.module.scss';

const MyAccount = (props) => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const { loading, userInfo } = auth;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm();

  const userUpdateSubmit = (data) => {
    dispatch(updateMe({ name: data.name }));
  };

  const passwordChangeSubmit = ({
    passwordCurrent,
    password,
    passwordConfirm,
  }) => {
    dispatch(updateMyPassword({ passwordCurrent, password, passwordConfirm }));
  };

  const userDataInputs = [
    {
      label: 'Name',
      register: 'name',
      type: 'text',
      defaultValue: userInfo ? userInfo.name : null,
    },
  ];

  const passwordUpdateInputs = [
    {
      label: 'Current Password',
      register: 'passwordCurrent',
      type: 'password',
    },
    {
      label: 'New Password',
      register: 'password',
      type: 'password',
    },
    {
      label: 'Confirm Password',
      register: 'passwordConfirm',
      type: 'password',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>My Account</h1>
      {userInfo &&
        (loading ? (
          <Spinner center/>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(userUpdateSubmit)}
              className={styles.form}
            >
              <div className={styles.form__inputGrid}>
                {userDataInputs.map((item, index) => (
                  <div className={styles.form__inputGroup} key={index}>
                    <input
                      type={item.type}
                      className={styles.form__input}
                      placeholder={item.label}
                      name={item.label}
                      {...register(item.register, { required: true })}
                      defaultValue={item.defaultValue}
                    />
                    {item.validation}
                    <label
                      htmlFor={item.label}
                      className={styles.form__inputLabel}
                    >
                      {item.label}
                    </label>
                    {errors[item.register] && (
                      <span>This field is required</span>
                    )}
                  </div>
                ))}
              </div>
              <button type='submit' className={styles.form__submit}>
                Submit
              </button>
            </form>
            <h3>Update Password</h3>
            <form
              onSubmit={handleSubmit2(passwordChangeSubmit)}
              className={styles.form}
            >
              <div className={styles.form__inputGrid}>
                {passwordUpdateInputs.map((item, index) => (
                  <div className={styles.form__inputGroup} key={index}>
                    <input
                      type={item.type}
                      className={styles.form__input}
                      placeholder={item.label}
                      name={item.label}
                      {...register2(item.register, { required: true })}
                    />
                    {item.validation}
                    <label
                      htmlFor={item.label}
                      className={styles.form__inputLabel}
                    >
                      {item.label}
                    </label>
                    {errors2[item.register] && (
                      <span>This field is required</span>
                    )}
                  </div>
                ))}
              </div>
              <button type='submit' className={styles.form__submit}>
                Submit
              </button>
            </form>
          </>
        ))}
    </div>
  );
};

export default MyAccount;
