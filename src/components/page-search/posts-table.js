import React from 'react';
import * as S from './posts-table.style';

const getTimeInAMPM = (timestamp) => {
  const time = new Date(timestamp * 1000);

  return time.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).toLowerCase();
};

const getTimeNum = (timestamp) => {
  const time = new Date(timestamp * 1000);

  return Number(`${time.getHours()}${time.getMinutes()}`);
};

const PostsTable = ({ posts }) => {
  const sortedPosts = posts.slice().sort(
    (a, b) => getTimeNum(a.data.created_utc) - getTimeNum(b.data.created_utc),
  );

  return (
    <S.PostsTableWrapper>
      <h2>Posts</h2>

      <S.PostsTable>
        <S.PostsTableHeadings>
          <S.PostsTableHeading>Title</S.PostsTableHeading>
          <S.PostsTableHeading>Time Posted</S.PostsTableHeading>
          <S.PostsTableHeading>Score</S.PostsTableHeading>
          <S.PostsTableHeading>Comments</S.PostsTableHeading>
          <S.PostsTableHeading>Author</S.PostsTableHeading>
        </S.PostsTableHeadings>

        <div>
          {sortedPosts.map((p) => {
            const { data } = p;

            return (
              <S.PostsTableRow key={data.title.toLowerCase()}>
                <div>
                  <a
                    href={`https://www.reddit.com/${data.permalink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.title}
                  </a>
                </div>
                <div>{getTimeInAMPM(data.created_utc)}</div>
                <div>{data.ups}</div>
                <div>{data.num_comments}</div>
                <div>
                  {
                    data.author !== '[deleted]'
                      ? (
                        <a
                          href={`https://www.reddit.com/u/${data.author}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {data.author}
                        </a>
                      )
                      : data.author
                  }
                </div>
              </S.PostsTableRow>
            );
          })}
        </div>
      </S.PostsTable>
    </S.PostsTableWrapper>
  );
};

export default PostsTable;
