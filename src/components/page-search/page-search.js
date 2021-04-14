import React from 'react';
import SubredditForm from './subreddit-form';
import useFetchPosts from '../../hooks/use-fetch-posts';
import * as S from './page-search.style';
import Container from '../common/container';

const SearchPage = () => {
  const { status } = useFetchPosts();

  return (
    <Container>
      <S.Headline>Find the best time for a subreddit</S.Headline>
      <SubredditForm />

      { status === 'loading' && <S.Spinner /> }
    </Container>
  );
};

export default SearchPage;
