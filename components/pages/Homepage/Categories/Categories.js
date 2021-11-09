import CategoryBox from './CategoryBox/CategoryBox';
import styles from './Categories.module.scss';

const Categories = (props) => {
  return (
    <div className={styles.categories}>
      {props.data.map((item, index) => (
        <CategoryBox key={index} data={item} />
      ))}
    </div>
  );
};

export default Categories;
