import styles from './CategoryBox.module.scss';

const CategoryBox = (props) => {
  const { data } = props;
  const style = {
    backgroundImage: `url(${data.img})`,
  };
  return <div className={styles.categoryBox} style={style}></div>;
};

export default CategoryBox;
