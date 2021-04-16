export const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
export const weekdayMap = weekdays.reduce((map, curr) => ({ ...map, [curr]: [] }), {});
export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const updateWeekdayHours = (hours, hour) => {
  const foundHour = hours.find((h) => h.hour === hour);

  if (foundHour) {
    const { hour: hr, count } = foundHour;

    return [...hours.filter((h) => h.hour !== hr), { hr, count: count + 1 }];
  }

  return [...hours, { hour, count: 1 }];
};

export const postsByWeekdayAndHour = (posts) => posts.map((p) => {
  const date = new Date(p.data.created_utc * 1000);

  return {
    weekday: weekdays[date.getDay()],
    hour: date.getHours(),
  };
});

export const getHeatmapFromPosts = (posts) => postsByWeekdayAndHour(posts)
  .reduce((days, curr) => ({
    ...days,
    [curr.weekday]: updateWeekdayHours(days[curr.weekday] || [], curr.hour),
  }), weekdayMap);
