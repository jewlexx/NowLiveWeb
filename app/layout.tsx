import { type Metadata } from 'next';
import Image from 'next/image';
import styles from './layout.module.scss';
import './globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s > Now Live',
    default: 'Now Live',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={styles.container}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <a href='https://www.cordor.dev' target='_blank' rel='noreferrer'>
            Developed by{' '}
            <span className={styles.logo}>
              <Image
                src='https://avatars.githubusercontent.com/u/61040004'
                alt="Juliette Cordor's Profile"
                title='Juliette Cordor'
                width={50}
                height={50}
              />
            </span>
          </a>
          <small>
            *Currently only supports Twitch... and I have no plans to support
            YouTube
          </small>
        </footer>
      </body>
    </html>
  );
}
