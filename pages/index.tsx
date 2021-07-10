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
			</Head>

			<main className={styles.main}>
				<h1>Welcome to Now Live!</h1>
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
