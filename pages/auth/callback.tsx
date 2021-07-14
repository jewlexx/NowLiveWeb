import { useEffect, useState } from 'react';
import styles from '../../styles/Auth.module.scss';

interface hashObject {
	access_token: string;
	scope: string;
	token_type: 'bearer';
}

interface AuthCallbackProps {
	redirectUrl: string;
}

export default function AuthCallback({ redirectUrl }: AuthCallbackProps) {
	const [hash, setHash] = useState<hashObject | undefined>(undefined);
	useEffect(() => {
		if ((window.location.hash || undefined) === undefined) {
			document.title = 'Hash is null, redirecting...';
			window.open(redirectUrl + '/auth', '_self');
		}
		const hash = window.location.hash.substr(1);

		const result = hash.split('&').reduce((res: any, item) => {
			var parts = item.split('=');
			res[parts[0]] = parts[1];
			return res;
		}, {});

		setHash(result);
	}, [redirectUrl]);

	return (
		<div>
			<style jsx global>{`
				body {
					background: #23272a;
					color: #fff;
					display: inline-block;
					margin: 0px auto;
					text-align: center;
				}
			`}</style>
			<p>
				{hash?.access_token === undefined ? (
					'Loading hash from url...'
				) : (
					<div className={styles.twitchLogin}>
						<p>
							Thank you for authorizing with Twitch! Copy and
							paste{' '}
							<i
								className={styles.codeText}
								id="NowLiveAuthTokenElement"
								onClick={() => {
									console.log('Yes');
									navigator.clipboard.writeText(
										hash.access_token
									);

									(
										document.getElementById(
											'copied'
										) as HTMLElement
									).style.opacity = '100';
									setTimeout(() => {
										(
											document.getElementById(
												'copied'
											) as HTMLElement
										).style.opacity = '0';
									}, 2000);
								}}
							>
								{hash.access_token}
							</i>{' '}
							into the <i>token</i> box to complete authorization
						</p>
						<small style={{ opacity: '0' }} id='copied'>
							Copied to clipboard
						</small>
					</div>
				)}
			</p>
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
