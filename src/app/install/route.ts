import UAParser from 'ua-parser-js';

export const dynamic = 'force-dynamic';

export async function GET(request: Request): Promise<Response> {
  const userAgentString = request.headers.get('user-agent');

  if (!userAgentString) {
    return new Response(JSON.stringify({ error: 'User agent is required' }), {
      status: 400,
    });
  }

  const userAgent = UAParser(userAgentString);

  if (userAgent.browser.name === 'Firefox') {
    return Response.redirect(
      'https://addons.mozilla.org/firefox/downloads/file/3968448/2dbb80bb3bfd4d999aad-1.1.1.xpi',
      302,
    );
  } else if (userAgent.browser.name === 'Chrome') {
    return Response.redirect(
      'https://chrome.google.com/webstore/detail/now-live/fonhghodpbmhkkccljcjkpjjooehflpk',

      302,
    );
  } else {
    return new Response(JSON.stringify({ error: 'Unsupported browser' }), {
      status: 400,
    });
  }
}
