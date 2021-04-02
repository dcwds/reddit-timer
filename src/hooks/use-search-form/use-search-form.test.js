import { renderHook, act } from '@testing-library/react-hooks';
import { createMemoryHistory } from 'history';
import useSearchForm from './use-search-form';
import { DEFAULT_SUBREDDIT } from '../../constants';

describe('useSearchForm', () => {
  let hook = null;
  let history = null;

  beforeEach(() => {
    history = createMemoryHistory();
    hook = renderHook(() => useSearchForm(DEFAULT_SUBREDDIT, history));
  });

  afterEach(() => {
    history = null;
    hook = null;
  });

  it('sets initial state', () => {
    const { result } = hook;

    expect(result.current.subreddit).toBe(DEFAULT_SUBREDDIT);
  });

  it('updates value using changeSubreddit handler', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    expect(result.current.subreddit).toBe('test');
  });

  it('updates url when using searchSubreddit handler via click event', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    act(() => { result.current.searchSubreddit({ type: 'click' }); });

    expect(history.location.pathname).toBe('/search/test');
  });

  it('updates url when using searchSubreddit handler via \'Enter\' key', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    act(() => { result.current.searchSubreddit({ key: 'Enter' }); });

    expect(history.location.pathname).toBe('/search/test');
  });
});
