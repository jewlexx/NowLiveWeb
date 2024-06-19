import { type Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.scss';

export const metadata: Metadata = {
  title: 'Now Live',
  description: 'Website for the Now Live chrome extension',
};

export default function Home(): JSX.Element {
  return (
    <>
      <span>
        <Link className={styles.link} href='/api/install' legacyBehavior>
          <Image
            src='https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png'
            alt='install for firefox'
            width={183}
            height={64}
          />
        </Link>
        <a
          className={styles.link}
          href='https://chrome.google.com/webstore/detail/now-live/fonhghodpbmhkkccljcjkpjjooehflpk'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            src='https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png'
            alt='install on the chrome web store'
            width={228}
            height={64}
          />
        </a>
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
