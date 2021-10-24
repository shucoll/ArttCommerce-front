import Link from 'next/link';
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
  const { item } = props;
  return (
    <Link href='/art/1'>
      <div
        className={`${styles.item} ${styles[`item_${item.type}`]}`}
        style={{
          backgroundImage: `url('${item.img}')`,
        }}
      >
        <h2 className={styles.item__text}>Art Name</h2>
        <h3 className={styles.item__text}>$30 USD</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
