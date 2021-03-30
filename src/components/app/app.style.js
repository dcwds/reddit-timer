import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Wrapper = styled.main`
  padding: 0 1.25rem; /* 20px */

  ${mediaQuery(breakpoint.xl, css`
      margin: 0 auto;
      max-width: 90rem; /* 1440px */
      padding: 0 5rem; /* 80px */
  `)}
`;

export const Content = styled.article`
  min-height: ${(props) => `calc(100vh - ${props.theme.size.headerHeight} - ${props.theme.size.footerHeight})`};
`;
