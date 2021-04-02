import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useSearchForm from '../../hooks/use-search-form';

const Search = () => {
  const history = useHistory();
  const { subreddit } = useParams();
  const {
    form,
    changeSubreddit,
    searchSubreddit,
  } = useSearchForm(subreddit, history);

  return (
    <article>
      <h1>Find the best time for a subreddit</h1>

      <div>
        <label htmlFor="subreddit-input">
          r/
          <input
            type="text"
            id="subreddit-input"
            defaultValue={form.subreddit}
            onChange={changeSubreddit}
            onKeyDown={searchSubreddit}
          />
        </label>

        <button
          type="button"
          onClick={searchSubreddit}
        >
          Search
        </button>
      </div>
    </article>
  );
};

export default Search;
