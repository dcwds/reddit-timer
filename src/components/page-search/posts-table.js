import React from 'react';
import * as S from './posts-table.style';

const PostsTable = ({ posts }) => {
  const sortedPosts = posts.slice().sort(
    (a, b) => a.createdAt.hoursNum - b.createdAt.hoursNum,
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
          {sortedPosts.map((p) => (
            <S.PostsTableRow key={p.title.toLowerCase()}>
              <div>
                <a
                  aria-label="title"
                  href={`https://reddit.com${p.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.title}
                </a>
              </div>
              <div>{p.createdAt.hoursText}</div>
              <div>{p.upvoteCount}</div>
              <div>{p.commentCount}</div>
              <div>
                {
                    p.author !== '[deleted]'
                      ? (
                        <a
                          href={`https://reddit.com/u/${p.author}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.author}
                        </a>
                      )
                      : p.author
                  }
              </div>
            </S.PostsTableRow>
          ))}
        </div>
      </S.PostsTable>
    </S.PostsTableWrapper>
  );
};

export default PostsTable;
