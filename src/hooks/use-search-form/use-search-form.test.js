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

    expect(result.current.form).toEqual({
      subreddit: DEFAULT_SUBREDDIT,
      isSubmitting: false,
      value: '',
    });
  });

  it('updates value using changeSubreddit handler', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    expect(result.current.form.value).toBe('test');
  });

  it('updates subreddit using searchSubreddit handler via click event', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    act(() => { result.current.searchSubreddit({ type: 'click' }); });

    expect(result.current.form.subreddit).toBe('test');
  });

  it('updates subreddit using searchSubreddit handler via \'Enter\' key', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    act(() => { result.current.searchSubreddit({ key: 'Enter' }); });

    expect(result.current.form.subreddit).toBe('test');
  });

  it('updates url when using searchSubreddit handler', () => {
    const { result } = hook;

    act(() => {
      result.current.changeSubreddit({ target: { value: 'test' } });
    });

    act(() => { result.current.searchSubreddit({ type: 'click' }); });

    expect(history.location.pathname).toBe('test');
  });
});
