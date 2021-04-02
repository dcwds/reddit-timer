import { useState, useEffect } from 'react';

const useSearchForm = (subreddit, history) => {
  const [form, setForm] = useState({
    subreddit,
    isSubmitting: false,
    value: '',
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
        subreddit: form.value,
        isSubmitting: true,
      }));
    }
  };

  useEffect(() => {
    if (form.isSubmitting) {
      history.push(form.subreddit);

      setForm((s) => ({ ...s, isSubmitting: false }));
    }
  }, [form.isSubmitting, form.subreddit, history]);

  return { form, changeSubreddit, searchSubreddit };
};

export default useSearchForm;
