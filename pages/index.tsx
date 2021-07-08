import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Coming Soon!</title>
				<meta
					name='description'
					content='Website for the Now Live chrome extension'
				/>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main className={styles.main}>
				<h1>Coming Soon!</h1>
				<p id='NowLiveExtensionInstalledOrNotText'>
					In the meantime, you can install the extension from{' '}
					<a>here (not yet released)</a>
				</p>
			</main>

			<footer className={styles.footer}>
				<p>
					Developed by{' '}
					<a
						href='https://github.com/jamesinaxx'
						className={styles.userLink}
					>
						jamesinaxx
					</a>
				</p>
			</footer>
		</div>
	);
}
