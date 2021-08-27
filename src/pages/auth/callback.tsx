import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Auth.module.scss';
import Page from '../../components/Page';

export default function AuthCallback(): JSX.Element {
  const router = useRouter();
  const [hashNull, setHashNull] = useState(false);

  useEffect(() => {
    if (window.location.hash === undefined || window.location.hash === '') {
      // document.title = 'Hash is null, redirecting...';
      // router.push('/auth');
      setHashNull(true);
    }
  }, [router]);

  return (
    <Page className={styles.container}>
      <main className={styles.main}>
        {!hashNull ? (
          <h1 id='NowLiveAuthText'>
            Thank you for logging in. Open Now Live to start using it...
          </h1>
        ) : (
          <h1>
            No Token was provided. Make sure you clicked the link from{' '}
            <Link href='/auth'>
              <a className={styles.link}>this page</a>
            </Link>
          </h1>
        )}
      </main>
    </Page>
  );
}
