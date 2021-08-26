import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default App;
