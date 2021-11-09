import Head from 'next/head';
import axios from '@axios';
import Homepage from '@pageComponents/Homepage/Homepage';

export default function Home(props) {
  console.log(props.data);
  return (
    <>
      <Head>
        <title>ArttCommerce</title>
      </Head>
      <Homepage data={props.data} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await axios.get('api/v1/products/homepageData');
    return { props: { data: data.data.data } };
  } catch (error) {
    if (error.response)
      return { props: { error: error.response.data.message } };
    else
      return {
        props: { error: 'Something went wrong. Please reload to view content' },
      };
  }
}
