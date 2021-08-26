import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Page from '../components/Page';

export default function Home(): JSX.Element {
  return (
    <Page
      className={styles.container}
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
    </Page>
  );
}
