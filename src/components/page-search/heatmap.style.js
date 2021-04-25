import styled from 'styled-components';

const getBackgroundColorOfHour = (hourCount) => ({
  0: '#E0E592',
  1: '#AED396',
  2: '#A9D194',
  3: '#A0CE93',
  4: '#99CD94',
  5: '#8CC894',
  6: '#5EB391',
  7: '#5DB492',
  8: '#5CB391',
  9: '#5AAD8C',
}[hourCount] || '#3984A3');

export const ReadableHourText = styled.div`
  background: linear-gradient(#FEFEFE, #E9E9E9);
  height: 3.125em; /* 50px */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReadableHours = styled.div`
  color: #787878;
  display: grid;
  grid-template-columns: 2fr repeat(12, 1fr);
`;

export const Hour = styled.div`
  background-color: ${({ count }) => getBackgroundColorOfHour(count)};
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease-in-out;

  /* Maintains 1 / 1 aspect ratio */
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-top: 100%;
  }

  &:hover, &:focus, &.selected {
    background-color: #141926;
    color: white;
  }
`;

export const HourCount = styled.span`
  font-weight: 700;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Weekday = styled.div`
  display: grid;
  grid-template-columns: 4fr repeat(24, 1fr);
`;

export const WeekdayTitle = styled.span`
  background-color: #1E2537;
  font-weight: 600;
  text-transform: capitalize;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heatmap = styled.div`
  color: white;
  font-weight: 500;
  font-size: ${(props) => props.theme.font.size.sm};
`;

export const TimezoneText = styled.p`
  font-size: ${(props) => props.theme.font.size.sm};
  text-align: center;
`;
