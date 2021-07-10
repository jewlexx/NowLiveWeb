import Image from 'next/image';
import styles from '../../styles/Auth.module.scss';

interface AuthProps {
	clientId: string;
	redirectUrl: string;
}

export default function Auth({ clientId, redirectUrl }: AuthProps) {
	const client_id = encodeURIComponent(clientId);
	const scope = encodeURIComponent('user:read:follows');
	const redirect_uri = encodeURIComponent(redirectUrl + '/auth/callback');

	return (
		<div className={styles.twitchLogin}>
			<style jsx global>{`
				body {
					background: #23272a;
					color: #fff;
					display: inline-block;
					margin: 0px auto;
					text-align: center;
				}
			`}</style>
			<p className={styles.info}>
				<a
					href={`https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&response_type=token&scope=${scope}&redirect_uri=${redirect_uri}`}
					className={styles.authButton}
				>
					<Image
						src='/images/TwitchGlitchPurple.svg'
						height='25px'
						width='25px'
						alt='Twitch Icon'
					/>
					Authorize
				</a>
			</p>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			clientId: process.env.TWITCHCLIENT,
			redirectUrl: process.env.REDIRECT_URL,
		},
	};
}
