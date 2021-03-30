import React from 'react';
import Logo from '../logo';
import * as S from './footer.style';

const Footer = () => (
  <S.Footer>
    <S.ProfyLink href="https://profy.dev/employers">profy.dev</S.ProfyLink>
    <Logo asMark />
    <S.TermsLink to="/terms">Terms & Privacy</S.TermsLink>
  </S.Footer>
);

export default Footer;
