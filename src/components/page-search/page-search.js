import React from 'react';
import SubredditForm from './subreddit-form';
import useFetchPosts from '../../hooks/use-fetch-posts';
import * as S from './page-search.style';
import Container from '../common/container';
import Heatmap from './heatmap';

const SearchPage = () => {
  const { posts, status } = useFetchPosts();

  return (
    <Container>
      <S.Headline>Find the best time for a subreddit</S.Headline>
      <SubredditForm />

      {
       {
         loading: <S.Spinner />,
         error: (
           <S.Error>
             We could not get the posts from Reddit.
             {' '}
             <a rel="noopener noreferrer" href="https://www.redditstatus.com">Is Reddit down?</a>
           </S.Error>
         ),
         resolved: <Heatmap posts={posts} />,
       }[status]
      }
    </Container>
  );
};

export default SearchPage;
