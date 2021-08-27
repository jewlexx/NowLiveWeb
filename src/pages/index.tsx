import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Page from '../components/Page';

export default function Home(): JSX.Element {
  return (
    <Page
      // className={styles.container}
      description='Website for the Now Live chrome extension'
    >
      <main className={styles.main}>
        <h1>Coming Soon!</h1>
        {/* This is so, if the extension is installed, we can change the text */}
        <p id='NowLiveExtensionInstalledOrNotText'>
          In the meantime, you can install the extension from{' '}
          <a href='#'>here (not yet released)</a>
        </p>
        <p>
          If you have installed NowLive, you might be looking for the{' '}
          <Link href='/auth'>
            <a className={styles.authLink}>Auth Page</a>
          </Link>
        </p>
      </main>
    </Page>
  );
}
