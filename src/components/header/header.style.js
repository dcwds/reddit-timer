import styled, { css } from 'styled-components';
import { navLinkStyle } from '../../styles/shared';
import { breakpoint, mediaQuery } from '../../styles/media-query';

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem 0; /* 20px */

  a { ${navLinkStyle} }

  ${mediaQuery(breakpoint.md, css`
    height: ${(props) => props.theme.size.headerHeight};
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLinkWrapper = styled.div`
  margin-right: 1.563rem; /* 25px */

  &:last-of-type { margin-right: 0; }
`;
