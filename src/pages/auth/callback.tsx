import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Auth.module.scss';
import Page from '../../components/Page';

export default function AuthCallback(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === undefined || window.location.hash === '') {
      document.title = 'Hash is null, redirecting...';
      router.push('/auth');
    }
  }, [router]);

  return (
    <Page className={styles.container}>
      <div className={styles.twitchLogin}>
        <p id='NowLiveAuthText'>
          Thank you for logging in. Open Now Live to start using it...
        </p>
      </div>
    </Page>
  );
}
