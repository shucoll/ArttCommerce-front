import ProductGrid from '@components/shared/ProductGrid/ProductGrid';
import styles from './Homepage.module.scss';

const Homepage = (props) => {
  return (
    <div className='container'>
      Carousel
      <h2>Featured Art Work</h2>
      <ProductGrid />
      Categories New Arrivals
    </div>
  );
};

export default Homepage;
