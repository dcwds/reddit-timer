import styled from 'styled-components';

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
