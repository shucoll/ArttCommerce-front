import { Provider } from 'react-redux';
import { useStore } from '@store/setup';
import Layout from '@components/HOC/Layout/Layout';
import Head from 'next/head';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>ArttMart</title>
        </Head>
        <Component {...pageProps} />
        <ToastContainer
          hideProgressBar={true}
          position='bottom-left'
          autoClose={4000}
          transition={Slide}
        />
      </Layout>
    </Provider>
  );
}

export default MyApp;
