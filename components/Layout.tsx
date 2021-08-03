import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import _ from 'lodash';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function getPathName(): string {
    const path = _.startCase(router.pathname.split('-').join(' ')).substr(1);

    return path + ' - Now Live';
  }

  return (
    <div>
      <Head>
        <title>{router.pathname === '/' ? 'Now Live' : getPathName()}</title>
      </Head>
      {children}
    </div>
  );
}
