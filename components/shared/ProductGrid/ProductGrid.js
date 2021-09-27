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
      img: 'img/l1.jpg',
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
  ];

  return (
    <ul className={styles.grid}>
      {products.map((item, index) => (
        <li
          className={`${styles.grid__item} ${
            styles[`grid__item_${item.type}`]
          }`}
          key={index}
          style={{
            backgroundImage: `url('${item.img}')`,
            // backgroundPosition: 'center',
            // backgroundSize: 'cover',
          }}
        >
          {/* <img src={item.img}></img> */}
        </li>
      ))}
    </ul>
  );
};

export default ProductGrid;
