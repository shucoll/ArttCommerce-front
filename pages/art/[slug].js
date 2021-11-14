import Head from 'next/head';
import axios from '@axios';
import ArtDetail from '@pageComponents/ArtDetail/ArtDetail';

const ArtDetailPage = (props) => {
  const { data, error } = props;
  if (error) {
    console.log(error);
    return null;
  }

  return (
    <>
      <Head>
        <title>ArttCommerce</title>
      </Head>
      <ArtDetail data={data} />
    </>
  );
};

export default ArtDetailPage;

export async function getServerSideProps({ query }) {
  const { slug } = query;

  try {
    const data = await axios.get(`api/v1/products/${slug}`);
    return { props: { data: data.data.data.data } };
  } catch (error) {
    if (error.response)
      return { props: { error: error.response.data.message } };
    else
      return {
        props: { error: 'Something went wrong. Please reload to view content' },
      };
  }
}
