import Head from 'next/head';
import Homepage from '@pageComponents/Homepage/Homepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>ArttCommerce</title>
      </Head>
      <Homepage />
    </>
  );
}
