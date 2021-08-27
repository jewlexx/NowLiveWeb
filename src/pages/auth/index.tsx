import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Auth.module.scss';
import Page from '../../components/Page';

interface AuthProps {
  clientId: string;
}

export default function Auth({ clientId }: AuthProps): JSX.Element {
  return (
    <Page
      // className={styles.container}
      description='Auth page for Now Live chrome extension'
    >
      <div className={styles.twitchLogin}>
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
            Authorize
          </a>
        </p>
      </div>
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
