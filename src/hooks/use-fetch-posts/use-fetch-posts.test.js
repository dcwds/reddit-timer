import { fetchPosts } from './use-fetch-posts';

describe('useFetchPosts', () => {
  beforeEach(() => jest.spyOn(window, 'fetch'));

  it('fetches posts', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: { children: [] } }),
    });

    const posts = await fetchPosts('javascript');

    expect(window.fetch).toHaveBeenCalledWith('https://www.reddit.com/r/javascript/top.json?t=year&limit=100&after=null');
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(posts).toEqual([]);
  });
});
