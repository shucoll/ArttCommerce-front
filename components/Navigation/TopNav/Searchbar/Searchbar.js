import styles from './Searchbar.module.scss';

import SearchIcon from '@public/svg/ic-search.svg';

const Searchbar = () => {
  return (
    <form action='#' className={styles.search}>
      <input
        type='text'
        className={styles.search__input}
        placeholder='Search...'
      />
      <button className={styles.search__button}>
        <SearchIcon className={styles.search__icon} />
      </button>
    </form>
  );
};

export default Searchbar;
