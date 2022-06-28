import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';

interface PageProps {
  description?: string | undefined;
}

export default function Page({
  children,
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
    <div className={styles.container}>
      <Head>
        <title>{getTitle()}</title>
        <meta name='description' content={description} />
      </Head>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a href='https://github.com/jewlexx' target='_blank' rel='noreferrer'>
          Developed by{' '}
          <span className={styles.logo}>
            <Image
              src='https://avatars.githubusercontent.com/u/61040004'
              alt='jewelexx Logo'
              title='jewelexx'
              width={50}
              height={50}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
