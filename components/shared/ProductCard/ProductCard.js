import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
  const { item } = props;
  return (
    <li
      className={`${styles.item} ${styles[`item_${item.type}`]}`}
      style={{
        backgroundImage: `url('${item.img}')`,
      }}
    >
      {/* <img src={item.img}></img> */}
      <h2 className={styles.item__text}>Art Name</h2>
      <h3 className={styles.item__text}>$30 USD</h3>
    </li>
  );
};

export default ProductCard;
