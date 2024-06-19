import { type Metadata } from 'next';
import Image from 'next/image';
import { IconBrandTwitch } from '@tabler/icons-react';
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
        <IconBrandTwitch /> Sign In With Twitch
      </a>
    </p>
  );
}
