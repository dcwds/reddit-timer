import styled from 'styled-components';
import StyledContainer from '../common/container';
import StyledSpinner from '../common/spinner';

export const Container = styled(StyledContainer)`
  max-width: 69.688em; /* 1115px */
  width: 100%;
`;

export const Headline = styled.h1`
  margin-top: 0;
  text-align: center;
`;

export const Spinner = styled(StyledSpinner)`
  margin-bottom: 3.75em;
`;

export const Error = styled.p.attrs({
  'aria-label': 'error',
})`
  margin-top: 3.75em;
  text-align: center;
`;
