import Link from 'next/link';
import styles from './CategoryBox.module.scss';

const CategoryBox = (props) => {
  const { data } = props;

  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  const style = {
    backgroundImage: `url(${data.image})`,
  };
  return (
    <Link href={`/allartwork?category=${data.name}`}>
      <div className={styles.categoryBox} style={style}>
        <h2 className={styles.categoryBox__text}>{capitalize(data.name)}</h2>
      </div>
    </Link>
  );
};

export default CategoryBox;
