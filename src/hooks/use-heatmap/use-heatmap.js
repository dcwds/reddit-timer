import { useState } from 'react';
import { getHeatmapFromPosts } from './heatmap-fns';

const useHeatmap = (posts) => {
  const [heatmap] = useState(getHeatmapFromPosts(posts));

  return { heatmap };
};

export default useHeatmap;
