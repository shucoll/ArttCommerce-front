import Link from 'next/link';
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
  const { item } = props;
  // console.log(item);
  return (
    <Link href='/art/1'>
      <div
        className={`${styles.item} ${styles[`item_${item.imageType}`]}`}
        style={{
          backgroundImage: `url('${item.image}')`,
        }}
      >
        <h2 className={styles.item__text}>{item.name}</h2>
        <h3 className={styles.item__text}>{item.price} USD</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
