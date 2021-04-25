import React, { useState } from 'react';
import { getPostsAsHeatmap } from '../../hooks/use-fetch-posts';
import useMedia from '../../hooks/use-media';
import { breakpoint } from '../../styles/media-query';
import * as S from './heatmap.style';

const readableHours = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];

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

const HourBlock = ({ count }) => {
  const [selected, setSelected] = useState(false);

  const onKeyDown = (e) => ((e.key === ' ' || e.key === 'Enter') ? setSelected(!selected) : null);

  return (
    <S.Hour
      count={count} // Styled component needs to be aware of this value.
      onClick={() => setSelected(!selected)}
      onKeyDown={onKeyDown}
      className={selected ? 'selected' : ''}
      role="button"
      tabIndex={0}
    >
      <S.HourCount>{ count }</S.HourCount>
    </S.Hour>
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
        hours.map((h, i) => (
          <HourBlock
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            count={h.length}
          />
        ))
    }
    </S.Weekday>
  );
};

const Heatmap = ({ posts }) => {
  const heatmap = getPostsAsHeatmap(posts);
  const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone.replace('_', ' ');

  return (
    <>
      <S.Heatmap>
        <S.ReadableHours>
          <div />
          {
            readableHours.map((h) => <ReadableHour key={h} hour={h} />)
          }
        </S.ReadableHours>
        {
          heatmap.map(
            (d, i) => (
              <Weekday
                key={weekdays[i]}
                title={weekdays[i]}
                hours={d}
              />
            ),
          )
        }
      </S.Heatmap>

      <S.TimezoneText>
        All times are shown in your timezone:
        {' '}
        <strong>{timezone}</strong>
      </S.TimezoneText>
    </>
  );
};

export default Heatmap;
