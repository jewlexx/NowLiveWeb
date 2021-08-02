import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Auth.module.scss';

interface AuthCallbackProps {
  redirectUrl: string;
}

export default function AuthCallback({ redirectUrl }: AuthCallbackProps) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === undefined || window.location.hash === '') {
      document.title = 'Hash is null, redirecting...';
      router.push(redirectUrl + '/auth');
    }
  }, [redirectUrl, router]);

  return (
    <div className={styles.container}>
      <div className={styles.twitchLogin}>
        <p id='NowLiveAuthText'>
          Thank you for logging in. Open Now Live to start using it...
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      redirectUrl: process.env.REDIRECT_URL,
    },
  };
}
