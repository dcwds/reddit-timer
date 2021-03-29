import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem; /* 100px */
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.link.nav[0]};
  margin-right: 1.563rem; /* 25px */

  &:hover {
    color: ${(props) => props.theme.colors.link.nav[1]}
  }

  &:last-of-type { margin-right: 0; }
`;
