import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';
// import { listProducts } from '@store/actions/productActions';
import Spinner from '@components/UI/Spinner/Spinner';
import ProductGrid from '@components/shared/ProductGrid/ProductGrid';

import styles from './AllArtWork.module.scss';

const AllArtWork = (props) => {
  const dispatch = useDispatch();

  // const { productList } = useSelector((state) => state);
  // const { loading, error, products } = productList;

  const [selectedOption, setSelectedOption] = useState(null);

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, {
  //       onClose: () =>
  //         dispatch({
  //           type: CLEAR_AUTH_ERROR,
  //         }),
  //     });
  //   }
  // }, [error]);

  const handleCategoriesChange = (e) => {
    console.log(e);
  };
  const handlePricingChange = (e) => {
    console.log(e);
  };
  const handleRelevanceChange = (e) => {
    console.log(e);
  };

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
        {/* <Spinner center /> */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default AllArtWork;
