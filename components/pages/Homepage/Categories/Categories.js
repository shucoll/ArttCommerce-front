import CategoryBox from './CategoryBox/CategoryBox';
import styles from './Categories.module.scss';

const Categories = (props) => {
  const content = [
    {
      img: '/img/m2.jpg',
    },
    {
      img: '/img/m1.jpg',
    },
    {
      img: '/img/m3.jpg',
    },
    {
      img: '/img/l1.jpg',
    },
    {
      img: '/img/m2.jpg',
    },
    {
      img: '/img/m1.jpg',
    },
  ];

  return (
    <div className={styles.categories}>
      {content.map((item, index) => (
        <CategoryBox key={index} data={item} />
      ))}
    </div>
  );
};

export default Categories;
