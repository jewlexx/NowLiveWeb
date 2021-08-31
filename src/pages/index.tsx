import React from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Page description='Website for the Now Live chrome extension'>
      <main className={styles.main}>
        <h1>Coming Soon!</h1>
        {/* This is so, if the extension is installed, we can change the text */}
        <p id='NowLiveExtensionInstalledOrNotText'>
          In the meantime, you can install the extension from{' '}
          <a
            className={styles.link}
            href='https://chrome.google.com/webstore/detail/now-live/fonhghodpbmhkkccljcjkpjjooehflpk'
            target='_blank'
            rel='noreferrer'
          >
            here
          </a>
        </p>
        <p>
          If you have installed NowLive, you might be looking for the{' '}
          <Link href='/auth'>
            <a className={styles.link}>Auth Page</a>
          </Link>
        </p>
      </main>
    </Page>
  );
}
