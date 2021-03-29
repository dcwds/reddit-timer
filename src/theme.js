const systemFontStack = `system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
`;

const theme = {
  font: {
    default: `montserrat, ${systemFontStack}`,
    headline: `bitter, ${systemFontStack}`,
  },
  colors: {
    link: {
      nav: ['#636363', '#000000'],
    },
  },
};

export default theme;
