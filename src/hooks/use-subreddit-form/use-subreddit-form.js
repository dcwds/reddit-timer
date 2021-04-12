import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const useSubredditForm = () => {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();

  const [subreddit, setSubreddit] = useState(initialSubreddit);

  const changeSubreddit = (e) => setSubreddit(e.target.value);

  const searchSubreddit = (e) => {
    // Support submission via enter key inside input.
    if (e.key === 'Enter' || e.type === 'click') {
      history.push(`/search/${subreddit}`);
    }
  };

  useEffect(() => {
    // Handles case where `search` link in header is clicked
    // which updates the search input value.
    setSubreddit(initialSubreddit);
  }, [initialSubreddit]);

  return { subreddit, changeSubreddit, searchSubreddit };
};

export default useSubredditForm;
