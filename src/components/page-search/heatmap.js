import React, { useMemo, useState } from 'react';
import { getPostsPerDay } from '../../hooks/use-fetch-posts';
import useMedia from '../../hooks/use-media';
import { breakpoint } from '../../styles/media-query';
import PostsTable from './posts-table';
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

const Weekday = ({
  day,
  postsPerHour,
  activeCell,
  setActiveCell,
  setSelectedPosts,
}) => {
  const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const responsiveTitle = useMedia(
    [`(min-width: ${breakpoint.lg})`],
    [weekdays[day]],
    weekdays[day].slice(0, 3),
  );

  return (
    <S.Weekday>
      <S.WeekdayTitle>{ responsiveTitle }</S.WeekdayTitle>
      {
        postsPerHour.map((posts, hour) => {
          const onClick = () => {
            setActiveCell({ day, hour });
            setSelectedPosts(posts);
          };

          const onKeyDown = (e) => (
            (e.key === ' ' || e.key === 'Enter') ? setActiveCell({ day, hour }) : null
          );

          return (
            <S.HourCell
              // eslint-disable-next-line react/no-array-index-key
              key={hour}
              isActive={activeCell.day === day && activeCell.hour === hour}
              onClick={onClick}
              onKeyDown={onKeyDown}
              postCount={posts.length}
              role="button"
              tabIndex={0}
            >
              <S.HourCount>{posts.length}</S.HourCount>
            </S.HourCell>
          );
        })
    }
    </S.Weekday>
  );
};

const Heatmap = ({ posts }) => {
  const [activeCell, setActiveCell] = useState({ day: null, hour: null });
  const [selectedPosts, setSelectedPosts] = useState([]);
  const postsPerDay = useMemo(() => getPostsPerDay(posts), [posts]);
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
          postsPerDay.map(
            (postsPerHour, day) => (
              <Weekday
                // eslint-disable-next-line react/no-array-index-key
                key={day}
                day={day}
                postsPerHour={postsPerHour}
                activeCell={activeCell}
                setActiveCell={setActiveCell}
                setSelectedPosts={setSelectedPosts}
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

      { !!selectedPosts.length && <PostsTable posts={selectedPosts} />}
    </>
  );
};

export default Heatmap;
