import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';
import axios from '@axios';
import AllArtWork from '@pageComponents/AllArtWork/AllArtWork';
import styles from '@styles/allArtWorkPage.module.scss';

const AllArtWorkPage = (props) => {
  const router = useRouter();

  if (props.error) {
    toast.error(props.error);
    return null;
  }

  const paginationHandler = (event) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = event.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <div className={styles.container}>
      <AllArtWork data={props.data} />
      <ReactPaginate
        pageCount={Math.ceil(props.data.totalResults / (props.limit * 1))}
        forcePage={props.page * 1 - 1}
        onPageChange={paginationHandler}
        pageRangeDisplayed={5}
        nextLabel='>'
        previousLabel='<'
        containerClassName={styles.paginate}
        pageClassName={styles.paginate__item}
        pageLinkClassName={styles.paginate__link}
        activeClassName={styles.paginate__item__active}
        previousClassName={styles.paginate__item}
        nextClassName={styles.paginate__item}
        previousLinkClassName={styles.paginate__link}
        nextLinkClassName={styles.paginate__link}
        disabledClassName={styles.paginate__item__disabled}
        breakLabel='...'
        breakClassName={styles.paginate__item}
        breakLinkClassName={styles.paginate__link}
      />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page || 1;
  const limit = 8;
  const category = query.category || '';
  const sort = query.sort || '';
  const q = query.q || '';
  try {
    const data = await axios.get(
      `api/v1/products?limit=${limit}&fields=slug,name,image,imageType,price,stock&page=${page}${
        category ? `&categoryName=${category}` : ''
      }${sort ? `&sort=${sort}` : ''}${q && `&q=${q}`}`
    );
    // console.log(data.data);
    return { props: { data: data.data, page, limit } };
  } catch (error) {
    if (error.response)
      return { props: { error: error.response.data.message } };
    else
      return {
        props: { error: 'Something went wrong. Please reload to view content' },
      };
  }
}

export default AllArtWorkPage;
