import { useForm } from 'react-hook-form';
import countriesList from './countriesList.json';

import styles from './ShippingAddress.module.scss';

const ShippingAddress = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    props.shippingAddress(data);
  };

  const inputItems = [
    {
      label: 'First Name',
      register: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name',
      register: 'lastName',
      type: 'text',
    },
    {
      label: 'Email',
      register: 'email',
      type: 'email',
    },
    {
      label: 'Phone Number',
      register: 'phone',
      type: 'number',
    },
    {
      label: 'Address',
      register: 'address',
      type: 'text',
    },
    {
      label: 'City',
      register: 'city',
      type: 'text',
    },
    {
      label: 'ZIP/Postal Code',
      register: 'postalCode',
      type: 'number',
    },
  ];
  // console.log(errors);

  return (
    <div className={styles.container}>
      <h3 className='h3' style={{ textAlign: 'center' }}>
        Shipping Address
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.form__inputGrid}>
          {inputItems.map((item, index) => (
            <div className={styles.form__inputGroup} key={index}>
              <input
                type={item.type}
                className={styles.form__input}
                placeholder={item.label}
                name={item.label}
                {...register(item.register, { required: true })}
              />
              {item.validation}
              <label htmlFor={item.label} className={styles.form__inputLabel}>
                {item.label}
              </label>
              {errors[item.register] && <span>This field is required</span>}
            </div>
          ))}
          <div className={styles.form__inputGroup}>
            <select
              {...register('country')}
              className={styles.form__input}
              defaultValue='none'
            >
              <option value='none' disabled hidden>
                Select country
              </option>
              {countriesList.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor='country' className={styles.form__inputLabel}>
              Country
            </label>
          </div>
        </div>

        <button type='submit' className={styles.form__submit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ShippingAddress;
