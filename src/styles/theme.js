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
    },
    lineHeight: {
      default: 1.69,
    },
  },
  color: {
    default: '#93918F',
    headline: '#000000',
    link: {
      nav: ['#636363', '#000000'],
    },
    button: {
      text: '#FFFFFF',
      background: ['#FDB755'],
    },
  },
  size: {
    headerHeight: '6.25rem', // 100px
    footerHeight: '6.25rem', // 100px
  },
};

export default theme;
