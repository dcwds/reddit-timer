import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.sm};
  height: ${(props) => props.theme.size.footerHeight};
  padding: 0 1.25rem; /* 20px */

  ${mediaQuery(breakpoint.lg, css`
      margin: auto;
      max-width: 61.25rem; /* 980px */
  `)}
`;

export const ProfyLink = styled.a`
  flex: 1;
`;

export const TermsLink = styled(Link)`
  flex: 1;
  text-align: right;
`;
