import ProductGrid from '@components/shared/ProductGrid/ProductGrid';
import Categories from './Categories/Categories';
import styles from './Homepage.module.scss';

const Homepage = (props) => {
  return (
    <div className='container'>
      <h2 className='h2'>Carousel</h2>
      <h2 className='h2'>Featured Art Work</h2>
      <ProductGrid />
      <h2 className='h2'>Categories</h2>
      <Categories />
      <h2 className='h2'>New Arrivals</h2>
      <ProductGrid />
    </div>
  );
};

export default Homepage;
