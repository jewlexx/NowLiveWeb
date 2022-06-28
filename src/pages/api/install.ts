import { NextApiHandler } from 'next';

const installUrl =
  'https://addons.mozilla.org/firefox/downloads/file/3968448/2dbb80bb3bfd4d999aad-1.1.1.xpi';

const handler: NextApiHandler = (_, res) => {
  res.status(302).redirect(installUrl);
};

export default handler;
