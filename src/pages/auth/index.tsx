import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Auth.module.scss';
import Page from '../../components/Page';

interface AuthProps {
  clientId: string;
}

export default function Auth({ clientId }: AuthProps): JSX.Element {
  return (
    <Page description='Auth page for Now Live chrome extension'>
      <main className={styles.main}>
        <p className={styles.info}>
          <a
            href={encodeURI(
              `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&response_type=token&scope=user:read:follows&redirect_uri=https://nowlive.jamesinaxx.me/auth/callback`,
            )}
            className={styles.authButton}
          >
            <Image
              src='/images/TwitchGlitchPurple.svg'
              height={25}
              width={25}
              alt='Twitch Icon'
            />{' '}
            Log In With Twitch
          </a>
        </p>
      </main>
    </Page>
  );
}

export async function getStaticProps(): Promise<unknown> {
  return {
    props: {
      clientId: process.env.TWITCHCLIENT,
    },
  };
}
