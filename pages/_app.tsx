import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Now Live</title>
				<meta
					name='description'
					content='Website for the Now Live chrome extension'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
export default App;
