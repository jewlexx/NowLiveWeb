'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../auth.module.scss';

export default function AuthCallback(): JSX.Element {
  const [hashNull, setHashNull] = useState(false);

  useEffect(() => {
    setHashNull(
      window.location.hash === undefined || window.location.hash === '',
    );
  }, []);

  return (
    <>
      {!hashNull ? (
        <h1 id='NowLiveAuthText'>
          Thank you for logging in. Open Now Live to start using it...
        </h1>
      ) : (
        <h1>
          No Token was provided. Make sure you clicked the link from{' '}
          <Link href='/auth' className={styles.link}>
            this page
          </Link>
        </h1>
      )}
    </>
  );
}
