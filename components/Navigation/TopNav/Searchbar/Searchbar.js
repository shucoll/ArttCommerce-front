import { useState } from 'react';
import router from 'next/router';
import styles from './Searchbar.module.scss';

import SearchIcon from '@public/svg/ic-search.svg';

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentPath = router.pathname;
    const currentQuery = router.query;

    currentQuery.q = searchText;
    if (!searchText) {
      delete currentQuery.q;
    }

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <form className={styles.search} onSubmit={handleFormSubmit}>
      <input
        type='text'
        className={styles.search__input}
        placeholder='Search...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={styles.search__button}>
        <SearchIcon className={styles.search__icon} />
      </button>
    </form>
  );
};

export default Searchbar;
