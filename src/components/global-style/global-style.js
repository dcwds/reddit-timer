import { createGlobalStyle, css } from 'styled-components';
import { breakpoint, mediaQuery } from '../../styles/media-query';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/montserrat.woff2") format("woff2"),
         url("/fonts/montserrat.woff") format("woff"),
         local("Montserrat-Regular");
  }

  @font-face {
    font-family: "montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/montserrat-medium.woff2") format("woff2"),
         url("/fonts/montserrat-medium.woff") format("woff"),
         local("Montserrat-Medium");
  }

  @font-face {
    font-family: "bitter";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/bitter.woff2") format("woff2"),
         url("/fonts/bitter.woff") format("woff"),
         local("Bitter-Regular");
  }

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
  }

  body {
    color: ${(props) => props.theme.color.default};
    font-family: ${(props) => props.theme.font.family.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.headline};
    font-family: ${(props) => props.theme.font.family.headline};
    line-height: ${(props) => props.theme.font.lineHeight.headline};
  }

  h1 {
    font-size: ${(props) => props.theme.font.size.md};

    ${mediaQuery(breakpoint.md, css`
      font-size: ${(props) => props.theme.font.size.lg};
    `)}
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
`;

export default GlobalStyle;
