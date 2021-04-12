import styled, { css } from 'styled-components';
import Button from '../common/button';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Hero = styled.article`
  margin-bottom: 1.25rem; /* 20px */
  text-align: center;

  ${mediaQuery(breakpoint.md, css`
    margin-bottom: 7.5rem; /* 120px */
  `)}
`;

export const Headline = styled.h1`
  margin: 0 0 1.25rem 0; /* 20px */
`;

export const Description = styled.p`
  ${mediaQuery(breakpoint.md, css`
    margin-bottom: 2.813rem; /* 45px */
  `)}
`;

export const CTAButton = styled(Button)`
  margin-bottom: 1.25rem; /* 20px */

  ${mediaQuery(breakpoint.md, css`
    margin-bottom: 2.813rem; /* 45px */
  `)}
`;

export const DefaultSubreddit = styled.p`
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 500;
  margin-top: 0;

  ${mediaQuery(breakpoint.md, css`
      font-size: inherit;
      margin: 0 0 2.25rem 0; /* 36px */
  `)}
`;
