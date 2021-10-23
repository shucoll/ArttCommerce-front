import { useState } from 'react';
import Select from 'react-select';
import ProductGrid from '@components/shared/ProductGrid/ProductGrid';

import styles from './AllArtWork.module.scss';

const AllArtWork = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const categoryOptions = [
    { value: 'floral', label: 'Floral' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'people', label: 'People' },
  ];

  const pricingOptions = [
    { value: 'high-to-low', label: 'High to Low' },
    { value: 'low-to-high', label: 'Low to high' },
  ];

  const relevanceOptions = [
    { value: 'newest', label: 'Newest' },
    { value: 'trending', label: 'Trending' },
  ];

  const handleCategoriesChange = (e) => {
    console.log(e);
  };
  const handlePricingChange = (e) => {
    console.log(e);
  };
  const handleRelevanceChange = (e) => {
    console.log(e);
  };

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.sidebar}>
        <h3 className={styles.sidebar__titles}>Categories</h3>
        <Select
          // defaultValue={selectedOption}
          isMulti
          onChange={handleCategoriesChange}
          options={categoryOptions}
          placeholder='Categories'
          className={styles.sidebar__dropdown}
        />
        <h3 className={styles.sidebar__titles}>Pricing</h3>
        <Select
          // defaultValue={selectedOption}
          isClearable
          onChange={handlePricingChange}
          options={pricingOptions}
          placeholder='Pricing'
          className={styles.sidebar__dropdown}
        />
        <h3 className={styles.sidebar__titles}>Relevance</h3>
        <Select
          // defaultValue={selectedOption}
          isClearable
          onChange={handleRelevanceChange}
          options={relevanceOptions}
          placeholder='Relevance'
          className={styles.sidebar__dropdown}
        />
      </div>
      <div className={styles.content}>
        <ProductGrid />
      </div>
    </div>
  );
};

export default AllArtWork;
