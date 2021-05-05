import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter, Route } from 'react-router-dom';
import useFetchPosts from './use-fetch-posts';

describe('useFetchPosts', () => {
  const wrapper = ({ children, route }) => (
    <MemoryRouter initialEntries={[route]}>
      <Route path="/search/:subreddit">
        {children}
      </Route>
    </MemoryRouter>
  );

  it('loads 500 posts from reddit', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchPosts(), {
        wrapper,
        initialProps: { route: '/search/500-posts' },
      },
    );

    expect(result.current.status).toBe('loading');
    expect(result.current.posts).toEqual([]);

    await waitForNextUpdate({ timeout: 10000 });

    expect(result.current.status).toBe('resolved');
    expect(result.current.posts.length).toBe(500);
    expect(result.current.posts).toMatchSnapshot();
  });

  it('stops loading when less than 500 posts are available', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchPosts(), {
        wrapper,
        initialProps: { route: '/search/less-than-500-posts' },
      },
    );

    await waitForNextUpdate();

    expect(result.current.status).toBe('resolved');
    expect(result.current.posts.length).toBe(270);
  });

  it('returns error when a request fails', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchPosts(), {
        wrapper,
        initialProps: { route: '/search/failing-request' },
      },
    );

    await waitForNextUpdate();

    expect(result.current.status).toBe('error');
  });
});
