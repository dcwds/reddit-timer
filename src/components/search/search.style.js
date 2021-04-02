import styled from 'styled-components';

export const Search = styled.article`
  margin-top: 1.688rem; /* 27px */
  text-align: center;
`;

export const Headline = styled.h1`
  margin-top: 0
`;

export const FormWrapper = styled.div`
  display: flex;
  height: 2.25rem; /* 36px */
  margin: 0 auto;
  max-width: 31.25rem; /* 500px */
`;

export const Label = styled.label`
  color: #9E9E9E;
  display: flex;
  align-items: center;
  flex: 1;
  height: inherit;
`;

export const LabelText = styled.span`
  letter-spacing: 0.35rem; /* 5px */
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid #E6E6E6;
  border-radius: 2px;
  flex: 1;
  height: inherit;
  margin: 0 0.625rem; /* 10px */
  padding: 0 0.938rem; /* 15px */
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.color.button.background.normal};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.color.button.text};
  font-size: ${(props) => props.theme.font.size.sm};
  font-weight: 500;
  padding: 0 0.938rem; /* 15px */
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.color.button.background.hover};
  }
`;
