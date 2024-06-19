import { type Metadata } from 'next';
import Image from 'next/image';
import styles from '../../styles/Auth.module.scss';

export const metadata: Metadata = {
  title: 'Auth',
  description: 'Auth page for Now Live chrome extension',
};

export default function Auth() {
  return (
    <p className={styles.info}>
      <a
        href={encodeURI(
          `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.TWITCHCLIENT}&response_type=token&scope=user:read:follows&redirect_uri=https://nowlive.jewelexx.com/auth/callback`,
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
  );
}
