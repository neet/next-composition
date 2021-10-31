import { ReactNode } from 'react';
import Head from 'next/head';

export interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>

      <main>{props.children}</main>
    </div>
  );
};
