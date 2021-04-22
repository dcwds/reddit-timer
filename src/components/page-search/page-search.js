import React, { useState } from 'react';
import useFetchPosts from '../../hooks/use-fetch-posts';
import SearchContext from './context';
import SubredditForm from './subreddit-form';
import Heatmap from './heatmap';
import * as S from './page-search.style';

const SearchPage = () => {
  const { posts, status } = useFetchPosts();
  const [selectedPostIds, setSelectedPostIds] = useState([]);

  const handleSelectedPostIds = (isAddOperation, postIds) => {
    if (isAddOperation) {
      setSelectedPostIds(selectedPostIds.concat(postIds));
    } else {
      setSelectedPostIds(selectedPostIds.filter((id) => !postIds.includes(id)));
    }
  };

  return (
    <SearchContext.Provider value={{ posts, selectedPostIds, handleSelectedPostIds }}>
      <S.Container>
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
         resolved: <Heatmap />,
       }[status]
      }
      </S.Container>
    </SearchContext.Provider>
  );
};

export default SearchPage;
