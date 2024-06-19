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
  // const pathname = usePathname()!;

  // const title = useMemo(() => {
  //   if (pathname === '/') return 'Now Live';

  //   const breadCrumbs = pathname
  //     ?.substring(1)
  //     .split('/')
  //     .map(crumb =>
  //       crumb
  //         .split('-')
  //         .map(val => val.substr(0, 1).toUpperCase() + val.substr(1))
  //         .join(' '),
  //     );

  //   return `${breadCrumbs.join(' > ')} - Now Live`;
  // }, [pathname]);

  return (
    <html lang='en'>
      {/* <head>
        <title>{title}</title>
      </head> */}

      <body className={styles.container}>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <a href='https://github.com/jewlexx' target='_blank' rel='noreferrer'>
            Developed by{' '}
            <span className={styles.logo}>
              <Image
                src='https://avatars.githubusercontent.com/u/61040004'
                alt='jewelexx Logo'
                title='jewelexx'
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
