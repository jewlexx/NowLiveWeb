import { type Metadata } from 'next';
import Link from 'next/link';
import {
  IconBrandChrome,
  IconBrandFirefox,
  IconDownload,
} from '@tabler/icons-react';
import styles from './home.module.scss';

export const metadata: Metadata = {
  title: 'Now Live',
  description: 'Website for the Now Live chrome extension',
};

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className={`${styles.header}`}>Welcome to Now Live</h1>
      <small>
        The quick and easy way to check which of your favorite streamers are
        live*
      </small>

      <span>
        <Link
          className={styles.linkbutton}
          href='/install?browser=Firefox'
          target='_blank'
          rel='noreferrer'
        >
          <IconBrandFirefox /> <span>Install for Firefox</span>
          <IconDownload className={styles.downloadIcon} />
        </Link>
        <Link
          className={styles.linkbutton}
          href='/install?browser=Chrome'
          target='_blank'
          rel='noreferrer'
        >
          <IconBrandChrome /> <span>Install for Google Chrome</span>
          <IconDownload className={styles.downloadIcon} />
        </Link>
      </span>
      <p className={styles.alreadyInstalled}>
        If you have installed NowLive, you might be looking for the{' '}
        <Link href='/auth' className={styles.link}>
          Auth Page
        </Link>
      </p>
    </>
  );
}
