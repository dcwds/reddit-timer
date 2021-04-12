import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Block = styled.article`
  margin-bottom: 2.5rem; /* 40px */

  ${mediaQuery(breakpoint.md, css`
    margin-bottom: 5rem; /* 80px */
  `)}
`;

export const Heading = styled.h2`
  margin-bottom: 0.938rem; /* 15px */
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  &:before {
    background-color: ${(props) => props.theme.color.default};
    border-radius: 50%;
    content: " ";
    display: inline-block;
    vertical-align: middle;
    height: 0.188rem; /* 3px */
    width: 0.188rem; /* 3px */
    margin-right: 0.313rem; /* 5px */
  }
`;
