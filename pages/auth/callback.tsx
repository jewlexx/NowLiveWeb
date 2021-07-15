import { useEffect } from 'react';
import styles from '../../styles/Auth.module.scss';

interface AuthCallbackProps {
	redirectUrl: string;
}

export default function AuthCallback({ redirectUrl }: AuthCallbackProps) {
	useEffect(() => {
		if (window.location.hash === undefined) {
			document.title = 'Hash is null, redirecting...';
			window.open(redirectUrl + '/auth', '_self');
		}
	}, [redirectUrl]);

	return (
		<div className={styles.container}>
			<div className={styles.twitchLogin}>
				<p>
					Thank you for logging in. Open Now Live to start using it...
				</p>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			redirectUrl: process.env.REDIRECT_URL,
		},
	};
}
