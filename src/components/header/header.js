import React from 'react';
import Logo from '../logo';
import * as S from './header.style';

const Header = () => (
  <S.Wrapper>
    <Logo />

    <S.Nav>
      <S.NavLink to="/search/javascript">Search</S.NavLink>
      <S.NavLink to="/#how-it-works">How it works</S.NavLink>
      <S.NavLink to="/#about">About</S.NavLink>
    </S.Nav>
  </S.Wrapper>
);

export default Header;
