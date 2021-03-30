import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.theme.size.headerHeight};
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  margin-right: 1.563rem; /* 25px */

  &:last-of-type { margin-right: 0; }
`;
