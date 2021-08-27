import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.scss';

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
    <div className={styles.container}>
      <Head>
        <title>{getTitle()}</title>
        <meta name='description' content={description} />
      </Head>
      <main className={styles.main}>
        {children}
        <footer className={styles.footer}>
          <a
            href='https://github.com/jamesinaxx'
            target='_blank'
            rel='noreferrer'
          >
            Developed by{' '}
            <span className={styles.logo}>
              <Image
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/d3d77af8-7ee9-454c-a912-5a67fa9063de-profile_image-70x70.png'
                alt='jamesinaxx Logo'
                title='jamesinaxx'
                width={50}
                height={50}
              />
            </span>
          </a>
        </footer>
      </main>
    </div>
  );
}
