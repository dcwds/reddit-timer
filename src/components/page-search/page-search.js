import React from 'react';
import SubredditForm from './subreddit-form';
import * as S from './page-search.style';
import Container from '../common/container';

const SearchPage = () => (
  <Container>
    <S.Headline>Find the best time for a subreddit</S.Headline>
    <SubredditForm />
  </Container>
);

export default SearchPage;
