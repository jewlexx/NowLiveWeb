import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon - Now Live</title>
        <meta
          name='description'
          content='Website for the Now Live chrome extension'
        />
      </Head>

      <main className={styles.main}>
        <h1>Coming Soon!</h1>
        <p id='NowLiveExtensionInstalledOrNotText'>
          In the meantime, you can install the extension from{' '}
          <a>here (not yet released)</a>
        </p>
        <p>
          If you have installed NowLive, you might be looking for the{' '}
          <Link href='/auth'>
            <a className={styles.authLink}>Auth Page</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          Developed by{' '}
          <a href='https://github.com/jamesinaxx' className={styles.userLink}>
            jamesinaxx
          </a>
        </p>
      </footer>
    </div>
  );
}
