import { Provider } from 'react-redux';
import { useStore } from '@store/setup';

import Layout from '@components/HOC/Layout/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
