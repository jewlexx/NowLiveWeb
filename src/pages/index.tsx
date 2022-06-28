import React from 'react';
import Link from 'next/link';
import Page from '../components/Page';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <Page description='Website for the Now Live chrome extension'>
      <h1>Coming Soon!</h1>
      <p id='NowLiveExtensionInstalledOrNotText'>
        In the meantime, you can install the extension{' '}
        <a
          className={styles.link}
          href='https://addons.mozilla.org/firefox/downloads/file/3968448/2dbb80bb3bfd4d999aad-1.1.1.xpi'
        >
          for Firefox
        </a>{' '}
        from{' '}
        <a
          className={styles.link}
          href='https://chrome.google.com/webstore/detail/now-live/fonhghodpbmhkkccljcjkpjjooehflpk'
          target='_blank'
          rel='noreferrer'
        >
          the Chrome web store
        </a>
      </p>
      <p>
        If you have installed NowLive, you might be looking for the{' '}
        <Link href='/auth'>
          <a className={styles.link}>Auth Page</a>
        </Link>
      </p>
    </Page>
  );
}
