import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Auth.module.scss';

interface AuthProps {
  clientId: string;
  redirectUrl: string;
}

export default function Auth({ clientId, redirectUrl }: AuthProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Authorization - NowLive</title>
        <meta
          name='description'
          content='Auth page for Now Live chrome extension'
        />
      </Head>
      <div className={styles.twitchLogin}>
        <p className={styles.info}>
          <a
            href={encodeURI(
              `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&response_type=token&scope=user:read:follows&redirect_uri=${redirectUrl}/auth/callback`
            )}
            className={styles.authButton}
          >
            <Image
              src='/images/TwitchGlitchPurple.svg'
              height={25}
              width={25}
              alt='Twitch Icon'
            />{' '}
            Authorize
          </a>
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      clientId: process.env.TWITCHCLIENT,
      redirectUrl: process.env.REDIRECT_URL,
    },
  };
}
