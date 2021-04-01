import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { DEFAULT_SUBREDDIT } from '../../constants';
import * as S from './header.style';

const Header = () => (
  <S.Header>
    <Logo />

    <S.Nav>
      <S.NavLinkWrapper>
        <Link to={`/search/${DEFAULT_SUBREDDIT}`}>Search</Link>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper>
        <a href="/#how-it-works">How it works</a>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper>
        <a href="/#about">About</a>
      </S.NavLinkWrapper>
    </S.Nav>
  </S.Header>
);

export default Header;
