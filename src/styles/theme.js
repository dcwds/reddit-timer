import { breakpoint } from './media-query';

const systemFontStack = `system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
`;

const theme = {
  breakpoint,
  font: {
    family: {
      default: `montserrat, ${systemFontStack}`,
      headline: `bitter, ${systemFontStack}`,
    },
    size: {
      default: '1em', // 16px
      sm: '0.875em', // 14px
      md: '1.5em', // 24px
      lg: '2.375em', // 38px
    },
    lineHeight: {
      default: 1.69,
      headline: 1.35,
    },
  },
  color: {
    default: '#93918F',
    headline: '#000000',
    link: {
      default: {
        normal: '#0087FF',
        hover: '#1360A4',
      },
      nav: {
        normal: '#636363',
        hover: '#000000',
      },
    },
    button: {
      text: '#FFFFFF',
      background: {
        normal: '#FDB755',
        hover: '#EEA845',
      },
    },
  },
  size: {
    headerHeight: '6.25rem', // 100px
    footerHeight: '6.25rem', // 100px
  },
};

export default theme;
