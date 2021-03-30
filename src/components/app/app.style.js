import styled from 'styled-components';

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 90rem; /* 1440px */
  padding: 0 5rem; /* 80px */
`;

export const Content = styled.article`
  min-height: ${(props) => `calc(100vh - ${props.theme.size.headerHeight} - ${props.theme.size.footerHeight})`};
`;
