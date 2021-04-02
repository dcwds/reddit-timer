import { useState, useEffect } from 'react';

const useSearchForm = (subreddit, history) => {
  const [form, setForm] = useState({
    isSubmitting: false,
    value: subreddit,
  });

  const changeSubreddit = (e) => setForm((s) => ({
    ...s,
    value: e.target.value,
  }));

  const searchSubreddit = (e) => {
    // Support submission via enter key inside input.
    if (e.key === 'Enter' || e.type === 'click') {
      setForm((s) => ({
        ...s,
        isSubmitting: true,
      }));
    }
  };

  useEffect(() => {
    // Handles case where `search` link in header is clicked
    // which updates the search input value.

    // Right now, this gets called twice on `subreddit` param change.
    setForm((s) => ({ ...s, value: subreddit }));
  }, [subreddit]);

  useEffect(() => {
    if (form.isSubmitting) {
      history.push(form.value);

      setForm((s) => ({ ...s, isSubmitting: false }));
    }
  }, [form.isSubmitting, form.value, history]);

  return { form, changeSubreddit, searchSubreddit };
};

export default useSearchForm;
