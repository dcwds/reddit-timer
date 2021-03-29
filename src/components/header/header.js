import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem; /* 100px */
`;

const Nav = styled.nav`
  display: flex;

  a {
    color: ${(props) => props.theme.colors.link.nav[0]};
    margin-right: 1.063rem; /* ~25px */
    padding: 0.5rem;

    &:hover {
      color: ${(props) => props.theme.colors.link.nav[1]}
    }

    &:last-of-type { margin-right: 0; }
  }
`;

const Header = () => (
  <Wrapper>
    <Logo />

    <Nav>
      <Link to="/search?q=javascript">Search</Link>
      <Link to="/#how-it-works">How it works</Link>
      <Link to="/#about">About</Link>
    </Nav>
  </Wrapper>
);

export default Header;
