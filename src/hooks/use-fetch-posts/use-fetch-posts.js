import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MAX_NUM_POSTS_PER_PAGE, NUM_POSTS_TO_FETCH } from '../../constants';

export const postsWithNeededData = (posts) => posts.map((p) => {
  const time = new Date(p.data.created_utc * 1000);

  return ({
    author: p.data.author,
    title: p.data.title,
    link: p.data.permalink,
    createdAt: {
      timestamp: p.data.created_utc,
      hoursText: time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).toLowerCase(),
      hoursNum: Number(`${time.getHours()}${time.getMinutes()}`), // used for sorting
    },
    commentCount: p.data.num_comments,
    upvoteCount: p.data.ups,
  }
  );
});

export const fetchPosts = async (
  subreddit,
  abortController,
  postAmount = NUM_POSTS_TO_FETCH,
  lastPostId = null,
  fetchedPosts = [],
) => {
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=${MAX_NUM_POSTS_PER_PAGE}${lastPostId ? `&after=${lastPostId}` : ''}`;
  const response = await fetch(url, { signal: abortController.signal });

  const { data: { children, after, dist } } = await response.json();
  const posts = fetchedPosts.concat(postsWithNeededData(children));
  const noMorePosts = dist && dist < MAX_NUM_POSTS_PER_PAGE;

  if (posts.length >= postAmount || noMorePosts) return posts.slice(0, postAmount);

  return fetchPosts(subreddit, abortController, postAmount, after, posts);
};

export const getPostsPerDay = (posts) => posts.reduce(
  (heatmap, curr) => {
    const heatmapCopy = [...heatmap];
    const createdAt = new Date(curr.createdAt.timestamp * 1000);
    const day = createdAt.getDay();
    const hour = createdAt.getHours();

    heatmapCopy[day][hour] = [...heatmapCopy[day][hour], curr];

    return heatmapCopy;
  },
  [...Array(7)].map(() => Array(24).fill([])),
);

const useFetchPosts = () => {
  const { subreddit } = useParams();
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const abortController = new AbortController();
    setStatus('loading');

    const getPosts = async (subr) => {
      try {
        const fetchedPosts = await fetchPosts(subr, abortController);

        setPosts(fetchedPosts);
        setStatus('resolved');
      } catch (err) {
        if (!abortController.signal.aborted) {
          setStatus('error');
        }
      }
    };

    getPosts(subreddit);

    return () => abortController.abort();
  }, [subreddit]);

  return { posts, status };
};

export default useFetchPosts;
