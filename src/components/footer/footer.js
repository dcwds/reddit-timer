import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import * as S from './footer.style';

const Footer = () => (
  <S.Footer>
    <a href="https://profy.dev/employers">profy.dev</a>
    <Logo asMark />
    <Link to="/terms">Terms & Privacy</Link>
  </S.Footer>
);

export default Footer;
