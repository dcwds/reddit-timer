import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const fetchPosts = async (
  subreddit,
  postAmount = 500,
  lastPostId = null,
  fetchedPosts = [],
) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100${lastPostId ? `&after=${lastPostId}` : ''}`);

  if (!response.ok) return fetchedPosts;

  const { data: { children, after } } = await response.json();
  const posts = fetchedPosts.concat(children);
  const noMorePosts = children.length < 100; // based on `limit` parameter in url

  if (posts.length >= postAmount || noMorePosts) return posts.slice(0, postAmount);

  return fetchPosts(subreddit, postAmount, after, posts);
};

const useFetchPosts = () => {
  const { subreddit } = useParams();
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');

    const getPosts = async (subr) => {
      try {
        const fetchedPosts = await fetchPosts(subr, 500);

        setPosts(fetchedPosts);
        setStatus('resolved');
      } catch (err) {
        setStatus('error');
      }
    };

    getPosts(subreddit);
  }, [subreddit]);

  return { posts, status };
};

export default useFetchPosts;
