import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import Head from 'next/head';
import Wrapper from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Nodebird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Wrapper.withRedux(MyApp);
