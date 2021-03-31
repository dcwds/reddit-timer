import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Wrapper = styled.main`
  padding: 0 1.25rem; /* 20px */
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  ${mediaQuery(breakpoint.xl, css`
      margin: 0 auto;
      max-width: 90rem; /* 1440px */
  `)}
`;
