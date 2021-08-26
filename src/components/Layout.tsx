import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();

  function getTitle(): string {
    if (router.pathname === '/') return 'Now Live';

    const breadCrumbs = router.pathname
      .substr(1)
      .split('/')
      .map(crumb =>
        crumb
          .split('-')
          .map(val => val.substr(0, 1).toUpperCase() + val.substr(1))
          .join(' '),
      );
    const path = breadCrumbs.join(' > ');

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
