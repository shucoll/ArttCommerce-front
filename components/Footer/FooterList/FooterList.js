import styles from './FooterList.module.scss';

const FooterList = (props) => {
  const itemList = props.listItem.items.map((item, index) => {
    return (
      <li className={styles.footerList__item} key={index}>
        <a>{item.name}</a>
      </li>
    );
  });

  return (
    <ul className={styles.footerList}>
      <li className={styles.footerList__head}>{props.listItem.title}</li>
      {itemList}
    </ul>
  );
};

export default FooterList;
