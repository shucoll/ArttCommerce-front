import { useDispatch } from 'react-redux';
import { addToCart } from '@store/actions/cartActions';

import DeliveryIcon from '@public/svg/delivery.svg';
import ReturnIcon from '@public/svg/return.svg';

import Button from '@components/UI/Button/Button';
// import ProductGrid from '@components/shared/ProductGrid/ProductGrid';

import styles from './ArtDetail.module.scss';

const ArtDetail = (props) => {
  const { data } = props;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data, 1));
  };

  return (
    <div className='container'>
      <div className={styles.main}>
        <div className={styles.main__imgContainer}>
          <img src={data.image} className={styles.main__img}></img>
        </div>
        <div className={styles.main__desc}>
          <h2 className='h2'>{data.name}</h2>
          <h3
            className={`h3 ${styles.main__desc__price}`}
          >{`$${data.price}`}</h3>
          <p className={styles.main__desc__para}>{data.description}</p>
          <Button text='Add To Cart' onClick={handleAddToCart} type='sec' />
          <hr className={styles.line} />
          <div>
            <DeliveryIcon className={styles.main__desc__icon} />
            One to two week delivery
          </div>
          <div>
            <ReturnIcon className={styles.main__desc__icon} />
            Free 14 day return policy
          </div>
          <hr className={styles.line} />
          <span style={{ fontSize: '1.4rem' }}>
            *The sold art work is a reproduced print of the original.
          </span>
        </div>
      </div>
      <div>
        <h3 className='h3' style={{ marginBottom: '1.5rem' }}>
          Similar Art Work
        </h3>
        {/* <ProductGrid /> */}
      </div>
    </div>
  );
};

export default ArtDetail;
