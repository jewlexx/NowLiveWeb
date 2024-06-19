import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.scss';
import {
  IconBrandChrome,
  IconBrandFirefox,
  IconDownload,
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Now Live',
  description: 'Website for the Now Live chrome extension',
};

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className={styles.rainbow}>Welcome to Now Live</h1>
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
          {/* <Image
            src='https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png'
            alt='install for firefox'
            width={183}
            height={64}
          /> */}
          <IconBrandFirefox /> <span>Install for Firefox</span>
          <IconDownload className={styles.downloadIcon} />
        </Link>
        <Link
          className={styles.linkbutton}
          href='/install?browser=Chrome'
          target='_blank'
          rel='noreferrer'
        >
          {/* <Image
            src='https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png'
            alt='install on the chrome web store'
            width={228}
            height={64}
          /> */}
          <IconBrandChrome /> <span>Install for Google Chrome</span>
          <IconDownload className={styles.downloadIcon} />
        </Link>
      </span>
      <p>
        If you have installed NowLive, you might be looking for the{' '}
        <Link href='/auth' className={styles.link}>
          Auth Page
        </Link>
      </p>
    </>
  );
}
