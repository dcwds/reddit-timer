import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useSubredditForm from '../../hooks/use-subreddit-form';
import * as S from './subreddit-form.style';

const SubredditForm = () => {
  const history = useHistory();
  const { subreddit: initialSubreddit } = useParams();
  const {
    subreddit,
    changeSubreddit,
    searchSubreddit,
  } = useSubredditForm(initialSubreddit, history);

  return (
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
  );
};

export default SubredditForm;
