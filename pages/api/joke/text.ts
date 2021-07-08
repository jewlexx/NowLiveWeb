import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ErrorData = {
	message: string;
	error: string;
};

type Data = string;

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data | ErrorData>
) {
	axios
		.get('https://official-joke-api.appspot.com/random_joke')
		.then(joke => {
			res.status(200).send(
				`<head>
                <title>Random Joke</title>
                </head>
                <body>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
                        div {
                            font-family: 'Roboto', sans-serif;
                            min-height: 100vh;
                            padding: 0 0.5rem;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }
                        h1 {
                            text-align: center;
                        }
                    </style>
                    <div>
                        <h1>${joke.data.setup}<br />${joke.data.punchline}</h1>
                        <p>
                            From
                            <a href="https://official-joke-api.appspot.com/"
                                >official joke api</a
                            >
                        </p>
                    </div>
                </body>`
			);
		})
		.catch(error => {
			res.status(503).json({
				message:
					'Apologies, the joke service is currently unavailable :( See the error for more info',
				error,
			});
		});
}
