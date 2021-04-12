import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.color.button.background.normal};
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.color.button.text};
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 500;
  height: 2.25rem; /* 36px */
  line-height: 2.25rem;
  padding: 0 0.938rem; /* 15px */
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.button.background.hover};
    color: ${(props) => props.theme.color.button.text};
  }
`;

export default Button;
