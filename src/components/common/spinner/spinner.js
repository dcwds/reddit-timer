import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div.attrs({
  'aria-label': 'loading',
})`
  border-radius: 50%;
  border-top: 0.375em solid #FEB756;
  border-right: 0.375em solid transparent;
  border-bottom: 0.375em solid #FEB756;
  border-left: 0.375em solid #FEB756;
  margin: auto;
  height: 4.375em; /* 70px */
  width: 4.375em; /* 70px */
  transform: translateZ(0);
  animation-name: ${spinAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default Spinner;
