export const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const weekdayMap = weekdays.reduce((map, curr) => ({ ...map, [curr]: [] }), {});
export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const updateWeekdayHours = (hours, post) => {
  const { hour, id } = post;
  const foundHour = hours.find((h) => h.hour === hour);

  if (foundHour) {
    const { hour: hr, count, postIds } = foundHour;

    return [
      ...hours.filter((h) => h.hour !== hr),
      {
        hour: hr,
        count: count + 1,
        postIds: postIds.concat(id),
      },
    ];
  }

  return [...hours, { hour, count: 1, postIds: [id] }];
};

export const postsByWeekdayAndHour = (posts) => posts.map((p) => {
  const date = new Date(p.data.created_utc * 1000);

  return {
    id: p.data.id,
    weekday: weekdays[date.getDay()],
    hour: date.getHours(),
  };
});

export const getHeatmapFromPosts = (posts) => postsByWeekdayAndHour(posts)
  .reduce((days, curr) => ({
    ...days,
    [curr.weekday]: updateWeekdayHours(days[curr.weekday], curr),
  }), weekdayMap);
