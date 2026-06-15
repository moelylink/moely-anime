export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const types = searchParams.getAll('type');
  const type = types[0] || 'character'; // 'character', 'person', or 'cover'

  if (!id) {
    return new Response('Missing ID', { status: 400 });
  }

  // Security: Check referer to prevent hotlinking from unauthorized domains
  const referer = req.headers.get('referer');
  if (referer && referer.trim() !== '') {
    try {
      // Only check HTTP and HTTPS referers. If it's an empty, about:blank, or special scheme, let it pass.
      if (referer.startsWith('http://') || referer.startsWith('https://')) {
        const refUrl = new URL(referer);
        const host = refUrl.hostname;
        // Allow localhost, the main site domain, and Vercel preview environments
        if (
          host !== 'anime.moely.link' &&
          host !== 'moely.link' &&
          host !== 'www.moely.link' &&
          host !== 'user.moely.link' &&
          host !== 'localhost' &&
          host !== '127.0.0.1' &&
          !host.endsWith('.vercel.app')
        ) {
          return new Response('Forbidden: Referer not allowed', { status: 403 });
        }
      }
    } catch (e) {
      // Ignore parsing errors and allow the request to proceed (放行异常/空referer)
    }
  }

  let bgmUrl = '';
  if (type === 'cover') {
    // For anime covers, the second 'type' parameter determines the size (default is 'common')
    const size = types[1] || 'common'; // 'common', 'large', 'medium', 'small', 'grid'
    bgmUrl = `https://api.bgm.tv/v0/subjects/${id}/image?type=${size}`;
  } else {
    const typeParam = type === 'person' ? 'persons' : 'characters';
    bgmUrl = `https://api.bgm.tv/v0/${typeParam}/${id}/image?type=grid`;
  }

  try {
    // Vercel server-side fetch will automatically follow 302 redirects to lain.bgm.tv
    const res = await fetch(bgmUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!res.ok) {
      return new Response('Not Found', { status: res.status });
    }

    const headers = new Headers();
    // Copy the correct content type (e.g. image/jpeg, image/png)
    headers.set('Content-Type', res.headers.get('Content-Type') || 'image/jpeg');
    
    // Cache on CDN for 1 year, and local browser for 1 year (immutable)
    headers.set('Cache-Control', 'public, max-age=31536000, s-maxage=31536000, immutable');
    
    // CORS headers for your main site
    headers.set('Access-Control-Allow-Origin', 'https://anime.moely.link');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    return new Response(res.body, {
      status: 200,
      headers
    });
  } catch (error) {
    return new Response('Error fetching image from Bangumi', { status: 500 });
  }
}
