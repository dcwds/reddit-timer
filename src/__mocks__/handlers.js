import { rest } from 'msw';
import response1 from './posts-response-1.json'; // r/javascript/top.json?t=year&limit=100
import response2 from './posts-response-2.json'; // r/javascript/top.json?t=year&limit=100&after=t3_jquo97
import response3 from './posts-response-3.json'; // r/javascript/top.json?t=year&limit=100&after=t3_l4rh5c
import response4 from './posts-response-4.json'; // r/javascript/top.json?t=year&limit=100&after=t3_in4z6d
import response5 from './posts-response-5.json'; // r/javascript/top.json?t=year&limit=100&after=t3_hj92fb

const responseMap = {
  initial: response1,
  t3_jquo97: response2,
  t3_l4rh5c: response3,
  t3_in4z6d: response4,
  t3_hj92fb: response5,
};

const getJSONResponseForRequest = (req) => {
  const after = req.url.searchParams.get('after');

  return responseMap[after || 'initial'];
};

const handlers = [
  rest.get('https://www.reddit.com/r/less-than-500-posts/top.json', (req, res, ctx) => {
    const after = req.url.searchParams.get('after');
    const json = getJSONResponseForRequest(req);

    if (after === 't3_l4rh5c') {
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

    if (after === 't3_l4rh5c') {
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
