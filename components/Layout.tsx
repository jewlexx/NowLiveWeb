import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>
          {router.pathname === '/'
            ? 'Now Live'
            : router.pathname + ' - Now Live'}
        </title>
      </Head>
      {children}
    </div>
  );
}
