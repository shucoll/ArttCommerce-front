import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

const ProductGrid = (props) => {

  // console.log(props.data);

  return (
    <div className={styles.grid}>
      {props.data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
