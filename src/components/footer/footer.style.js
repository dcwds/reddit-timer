import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  height: 6.25rem; /* 100px */
  font-size: 0.875rem;
`;

export const ProfyLink = styled.a`
  flex: 1;
`;

export const TermsLink = styled(Link)`
  flex: 1;
  text-align: right;
`;
