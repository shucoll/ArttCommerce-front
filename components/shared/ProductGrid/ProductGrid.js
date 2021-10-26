import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

const ProductGrid = (props) => {
  const products = [
    {
      img: '/img/m1.jpg',
      type: 'medium',
    },
    {
      img: '/img/m2.jpg',
      type: 'medium',
    },
    {
      img: '/img/l1.jpg',
      type: 'tall',
    },
    {
      img: '/img/m3.jpg',
      type: 'medium',
    },
    {
      img: '/img/m4.jpg',
      type: 'medium',
    },
    // {
    //   img: 'img/l1.jpg',
    //   type: 'tall',
    // },
    // {
    //   img: '/img/m3.jpg',
    //   type: 'medium',
    // },
    // {
    //   img: '/img/m4.jpg',
    //   type: 'medium',
    // },
    // {
    //   img: 'img/l1.jpg',
    //   type: 'tall',
    // },
    // {
    //   img: '/img/m3.jpg',
    //   type: 'medium',
    // },
    // {
    //   img: '/img/m4.jpg',
    //   type: 'medium',
    // },
  ];

  return (
    <div className={styles.grid}>
      {products.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
