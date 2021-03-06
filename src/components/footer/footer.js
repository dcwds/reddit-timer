import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import * as S from './footer.style';
import { PROFY_EMPLOYERS_LINK } from '../../constants';

const Footer = () => (
  <S.Footer>
    <S.ProfyLinkWrapper>
      <a href={PROFY_EMPLOYERS_LINK}>profy.dev</a>
    </S.ProfyLinkWrapper>
    <Logo asMark />
    <S.TermsLinkWrapper>
      <Link to="/terms">Terms & Privacy</Link>
    </S.TermsLinkWrapper>
  </S.Footer>
);

export default Footer;
