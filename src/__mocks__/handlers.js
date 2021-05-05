import { rest } from 'msw';
import response1 from './reddit-response-1.json'; // r/javascript/top.json?t=year&limit=100
import response2 from './reddit-response-2.json'; // r/javascript/top.json?t=year&limit=100&after=t3_gju3am
import response3 from './reddit-response-3.json'; // r/javascript/top.json?t=year&limit=100&after=t3_hxm70h
import response4 from './reddit-response-4.json'; // r/javascript/top.json?t=year&limit=100&after=t3_jwphd6
import response5 from './reddit-response-5.json'; // r/javascript/top.json?t=year&limit=100&after=t3_ltfo7v

const responseMap = {
  initial: response1,
  t3_gju3am: response2,
  t3_hxm70h: response3,
  t3_jwphd6: response4,
  t3_ltfo7v: response5,
};

const getJSONResponseForRequest = (req) => {
  const after = req.url.searchParams.get('after');

  return responseMap[after || 'initial'];
};

const handlers = [
  rest.get('https://www.reddit.com/r/less-than-500-posts/top.json', (req, res, ctx) => {
    const after = req.url.searchParams.get('after');
    const json = getJSONResponseForRequest(req);

    if (after === 't3_hxm70h') {
      json.data.dist = 70;
      json.data.after = null;
      json.data.children = json.data.children.slice(0, 70);
    }

    return res(
      ctx.status(200),
      ctx.json(json),
    );
  }),

  rest.get('https://www.reddit.com/r/failing-request/top.json', (req, res, ctx) => {
    const after = req.url.searchParams.get('after');

    if (after === 't3_hxm70h') {
      return res(
        ctx.status(500),
        ctx.json({ errorMessage: 'Internal server error' }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json(getJSONResponseForRequest(req)),
    );
  }),

  rest.get('https://www.reddit.com/*', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json(getJSONResponseForRequest(req)),
  )),
];

export default handlers;
