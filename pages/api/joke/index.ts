import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ErrorData = {
	message: string;
	error: string;
};

type Data = {
	setup: string;
	punchline: string;
	origin: 'https://official-joke-api.appspot.com/';
};

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data | ErrorData>
) {
	axios
		.get('https://official-joke-api.appspot.com/random_joke')
		.then(joke => {
			res.status(200).json({
				setup: joke.data.setup,
				punchline: joke.data.punchline,
				origin: 'https://official-joke-api.appspot.com/',
			});
		})
		.catch(error => {
			res.status(503).json({
				message:
					'Apologies, the joke service is currently unavailable :( See the error for more info',
				error,
			});
		});
}
