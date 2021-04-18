import mockPosts from '../../__mocks__/posts-date-timestamps.json';
import { getHeatmapFromPosts, postsByWeekdayAndHour, updateWeekdayHours } from './heatmap-fns';

describe('useHeatmap', () => {
  it('should test with Europe/Berlin timezone', () => {
    expect(new Date().getTimezoneOffset()).toBe(-120);
  });

  it('converts the unix timestamp of posts', () => {
    expect(postsByWeekdayAndHour(mockPosts)).toEqual([
      { hour: 13, weekday: 'saturday' },
      { hour: 13, weekday: 'sunday' },
      { hour: 13, weekday: 'monday' },
    ]);
  });

  it('creates a heatmap from posts by weekdays and hours', () => {
    expect(getHeatmapFromPosts(mockPosts)).toEqual({
      sunday: [{ hour: 13, count: 1 }],
      monday: [{ hour: 13, count: 1 }],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [{ hour: 13, count: 1 }],
    });
  });

  it('should add new hour to hours object with a count of 1', () => {
    expect(updateWeekdayHours([{ hour: 12, count: 1 }], 13)).toEqual([
      { hour: 12, count: 1 },
      { hour: 13, count: 1 },
    ]);
  });

  it('should increment hour count by 1 when hour already exists', () => {
    expect(updateWeekdayHours([{ hour: 12, count: 1 }], 12)).toEqual([
      { hour: 12, count: 2 },
    ]);
  });
});
