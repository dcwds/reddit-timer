import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const InfoWrapper = styled.div`
  ${mediaQuery(breakpoint.md, css`
    margin-left: auto;
    margin-right: auto;
    max-width: 46.25rem; /* 740px */
  `)}
`;

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

export const Link = styled.a`
  color: ${(props) => props.theme.color.link.default[0]};

  &:hover {
    color: ${(props) => props.theme.color.link.default[1]};
  }
`;
