import { css } from 'styled-components';

export const navLinkStyle = css`
  color: ${(props) => props.theme.color.link.nav[0]};

  &:hover {
    color: ${(props) => props.theme.color.link.nav[1]}
  }
`;
