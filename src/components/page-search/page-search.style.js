import styled from 'styled-components';
import StyledSpinner from '../common/spinner';

export const Headline = styled.h1`
  margin-top: 0
`;

export const Spinner = styled(StyledSpinner)`
  margin-top: 3.75em; /* 60px */
  margin-bottom: 3.75em;
`;

export const Error = styled.p.attrs({
  'aria-label': 'error',
})`
  margin-top: 3.75em;
  text-align: center;
`;
