import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import _ from 'lodash';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function getTitle(): string {
    if (router.pathname === '/') return 'Now Live';

    const path = _.startCase(router.pathname.split('-').join(' '));

    return path + ' - Now Live';
  }

  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      {children}
    </div>
  );
}
