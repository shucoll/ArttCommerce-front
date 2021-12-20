// import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';
import Spinner from '@components/UI/Spinner/Spinner';
import ProductGrid from '@components/shared/ProductGrid/ProductGrid';

import styles from './AllArtWork.module.scss';

const AllArtWork = (props) => {
  const router = useRouter();

  const queryChangeHandler = (event, type) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;

    switch (type) {
      case 'category':
        if (!event) delete currentQuery.category;
        else currentQuery.category = event.value;
        break;
      case 'pricing':
        if (!event) delete currentQuery.sort;
        else currentQuery.sort = event.value;
    }
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  const categoryOptions = [
    { value: 'floral', label: 'Floral' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'people', label: 'People' },
    { value: 'places', label: 'Places' },
  ];

  const pricingOptions = [
    { value: '-price', label: 'High to Low' },
    { value: 'price', label: 'Low to high' },
  ];

  // const relevanceOptions = [
  //   { value: 'newest', label: 'Newest' },
  //   { value: 'trending', label: 'Trending' },
  // ];

  const getCategoryDefaultValue = () => {
    if (router.query && router.query.category) {
      const val = router.query.category;

      for (let i = 0; i < categoryOptions.length; i++) {
        if (categoryOptions[i].value === val) {
          return categoryOptions[i];
        }
      }
    } else return null;
  };

  const getPricingDefaultValue = () => {
    if (router.query && router.query.sort) {
      const val = router.query.sort;

      for (let i = 0; i < pricingOptions.length; i++) {
        if (pricingOptions[i].value === val) {
          return pricingOptions[i];
        }
      }
    } else return null;
  };

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebar__titles}>Categories</h3>
        <Select
          defaultValue={getCategoryDefaultValue}
          isClearable
          onChange={(e) => queryChangeHandler(e, 'category')}
          options={categoryOptions}
          placeholder='Categories'
          className={styles.sidebar__dropdown}
        />
        <h3 className={styles.sidebar__titles}>Pricing</h3>
        <Select
          defaultValue={getPricingDefaultValue}
          isClearable
          onChange={(e) => queryChangeHandler(e, 'pricing')}
          options={pricingOptions}
          placeholder='Pricing'
          className={styles.sidebar__dropdown}
        />
        {/* <h3 className={styles.sidebar__titles}>Relevance</h3> */}
        {/* <Select
          // defaultValue={}
          isClearable
          onChange={handleRelevanceChange}
          options={relevanceOptions}
          placeholder='Relevance'
          className={styles.sidebar__dropdown}
        /> */}
      </div>
      <div className={styles.content}>
        {/* <Spinner center /> */}
        <ProductGrid data={props.data.data} />
      </div>
    </div>
  );
};

export default AllArtWork;
