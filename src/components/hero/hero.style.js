import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.section`
  margin-top: 1.688rem; /* 27px */
  text-align: center;
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.color.button.text};
  background-color: ${(props) => props.theme.color.button.background[0]};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 500;
  height: 2.25rem; /* 36px */
  line-height: 2.25rem;
  padding: 0 0.938rem; /* 15px */
  border-radius: 4px;
  text-transform: uppercase;
`;

export const DefaultSubreddit = styled.p`
  font-weight: 500;
`;
