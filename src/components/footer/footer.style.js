import styled, { css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.sm};
  height: ${(props) => props.theme.size.footerHeight};
  margin: auto auto 0 auto;
  padding: 0 1.25rem; /* 20px */
  width: 100%;

  ${mediaQuery(breakpoint.lg, css`
      max-width: 61.25rem; /* 980px */
  `)}
`;

export const ProfyLinkWrapper = styled.div`
  flex: 1;
`;

export const TermsLinkWrapper = styled.div`
  flex: 1;
  text-align: right;
`;
