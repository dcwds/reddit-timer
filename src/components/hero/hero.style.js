import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Hero = styled.article`
  margin-top: 1.688rem; /* 27px */
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

export const CTAButton = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.color.button.text};
  background-color: ${(props) => props.theme.color.button.background[0]};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 500;
  height: 2.25rem; /* 36px */
  line-height: 2.25rem;
  margin-bottom: 1.25rem; /* 20px */
  padding: 0 0.938rem; /* 15px */
  border-radius: 4px;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.button.background[1]};
  }

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
