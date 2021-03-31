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
      default: '1rem', // 16px
      sm: '0.875rem', // 14px
      md: '1.75rem', // 28px
      lg: '2.375rem', // 38px
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
      default: ['#0087FF', '#1360A4'],
      nav: ['#636363', '#000000'],
    },
    button: {
      text: '#FFFFFF',
      background: ['#FDB755', '#EEA845'],
    },
  },
  size: {
    headerHeight: '6.25rem', // 100px
    footerHeight: '6.25rem', // 100px
  },
};

export default theme;
