import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../../styles/media-query';

const Container = styled.article`
  ${mediaQuery(breakpoint.md, css`
    margin-left: auto;
    margin-right: auto;
    max-width: 48.75rem; /* 780px */
  `)}
`;

export default Container;
