import { NextApiHandler } from 'next';
import { UAParser } from 'ua-parser-js';

const handler: NextApiHandler = (req, res) => {
  const userAgentString = req.headers['user-agent'];

  if (userAgentString === undefined) {
    res.status(400).json({ error: 'User agent is required' });
    return;
  }

  const userAgent = UAParser(userAgentString);

  if (userAgent.browser.name === 'Firefox') {
    res
      .status(302)
      .redirect(
        'https://addons.mozilla.org/firefox/downloads/file/3968448/2dbb80bb3bfd4d999aad-1.1.1.xpi',
      );
  } else if (userAgent.browser.name === 'Chrome') {
    res
      .status(302)
      .redirect(
        'https://chrome.google.com/webstore/detail/now-live/fonhghodpbmhkkccljcjkpjjooehflpk',
      );
  } else {
    res.status(400).json({ error: 'Unsupported browser' });
  }
};

export default handler;
