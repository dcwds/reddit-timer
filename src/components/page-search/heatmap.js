import React from 'react';
import useHeatmap from '../../hooks/use-heatmap';
import useMedia from '../../hooks/use-media';
import { breakpoint } from '../../styles/media-query';
import * as S from './heatmap.style';

const allHours = [...Array(24).keys()];

const readableHours = {
  0: '12:00am',
  2: '2:00am',
  4: '4:00am',
  6: '6:00am',
  8: '8:00am',
  10: '10:00am',
  12: '12:00pm',
  14: '2:00pm',
  16: '4:00pm',
  18: '6:00pm',
  20: '8:00pm',
  22: '10:00pm',
};

const ReadableHour = ({ hour }) => {
  const responsiveHour = useMedia(
    [`(min-width: ${breakpoint.lg})`],
    [hour],
    hour.replace(':00', ''),
  );

  return (
    <S.ReadableHourText>
      { responsiveHour }
    </S.ReadableHourText>
  );
};

const Weekday = ({ title, hours }) => {
  const responsiveTitle = useMedia(
    [`(min-width: ${breakpoint.lg})`],
    [title],
    title.slice(0, 3),
  );

  return (
    <S.Weekday>
      <S.WeekdayTitle>{ responsiveTitle }</S.WeekdayTitle>
      {
      allHours.map((n) => {
        const count = hours[n] !== undefined ? hours[n].count : 0;

        return (
          <S.Hour key={n} num={n} count={count}>
            <S.HourCount>{count}</S.HourCount>
          </S.Hour>
        );
      })
    }
    </S.Weekday>
  );
};

const Heatmap = ({ posts }) => {
  const { heatmap } = useHeatmap(posts);
  const weekdays = Object.keys(heatmap);

  return (
    <S.Heatmap>
      <S.ReadableHours>
        <div />
        {
          allHours.map((n) => (
            readableHours[n] !== undefined
              ? <ReadableHour key={n} hour={readableHours[n]} />
              : null
          ))
        }
      </S.ReadableHours>
      { weekdays.map((d) => <Weekday key={d} title={d} hours={heatmap[d]} />) }
    </S.Heatmap>
  );
};

export default Heatmap;
