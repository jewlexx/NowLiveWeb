import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface PageProps {
  description?: string | undefined;
  className?: string | undefined;
}

export default function Page({
  children,
  className,
  description,
}: React.PropsWithChildren<PageProps>): JSX.Element {
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

    return `${breadCrumbs.join(' > ')} - Now Live`;
  }

  return (
    <div className={className}>
      <Head>
        <title>{getTitle()}</title>
        <meta name='description' content={description} />
      </Head>
      {children}
    </div>
  );
}
