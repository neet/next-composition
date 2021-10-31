import { AppProps } from 'next/app';
import { Fragment } from 'react';

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout ?? Fragment;

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
