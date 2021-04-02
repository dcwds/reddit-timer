import React from 'react';
import SubredditForm from './subreddit-form';
import * as S from './page-search.style';

const SearchPage = () => (
  <S.Container>
    <S.Headline>Find the best time for a subreddit</S.Headline>
    <SubredditForm />
  </S.Container>
);

export default SearchPage;
