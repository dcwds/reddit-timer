import React from 'react';
import useHeatmap from '../../hooks/use-heatmap';

const Hour = ({ count }) => (<div>{count}</div>);

const Weekday = ({ title, hours }) => (
  <div>
    <div>{title}</div>
    {
      [...Array(24).keys()].map((n) => (
        <Hour
          key={`${title}-${n}`}
          num={n}
          count={hours[n] !== undefined ? hours[n].count : 0}
        />
      ))
    }
  </div>
);

const Heatmap = ({ posts }) => {
  const { heatmap } = useHeatmap(posts);
  const weekdays = Object.keys(heatmap);

  return (
    <div>
      {weekdays.map((d) => <Weekday key={d} title={d} hours={heatmap[d]} />)}
    </div>
  );
};

export default Heatmap;
