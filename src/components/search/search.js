import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useSearchForm from '../../hooks/use-search-form';
import * as S from './search.style';

const Search = () => {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();
  const {
    subreddit,
    changeSubreddit,
    searchSubreddit,
  } = useSearchForm(initialSubreddit, history);

  return (
    <S.Search>
      <S.Headline>Find the best time for a subreddit</S.Headline>

      <S.FormWrapper>
        <S.Label htmlFor="subreddit-input">
          <S.LabelText>r/</S.LabelText>
          <S.Input
            type="text"
            id="subreddit-input"
            value={subreddit}
            onChange={changeSubreddit}
            onKeyDown={searchSubreddit}
          />
        </S.Label>

        <S.Button
          type="button"
          onClick={searchSubreddit}
        >
          Search
        </S.Button>
      </S.FormWrapper>
    </S.Search>
  );
};

export default Search;
