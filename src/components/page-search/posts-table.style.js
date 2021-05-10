import styled, { css } from 'styled-components';
import Container from '../common/container';

const GridTemplate = css`
  display: grid;
  grid-template-columns: 6fr minmax(auto, 2fr) minmax(auto, 1fr) minmax(auto, 2fr) minmax(auto, 2fr);
`;

const EllipseText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const BorderRight = css`
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.color.table.border};

  &:last-of-type {
    border-right: none;
  }
`;

export const PostsTableWrapper = styled(Container)`
  margin-bottom: 2.5em; /* 40px */
  margin-top: 2.5em; /* 40px */
`;

export const PostsTable = styled.div.attrs({
  'aria-label': 'posts table',
})`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.table.border};
  color: ${({ theme }) => theme.color.table.text};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const PostsTableHeadings = styled.div`
  ${GridTemplate}

  & > div {
    padding: 0.625em; /* 10px */

    ${BorderRight}
    ${EllipseText}
  }
`;

export const PostsTableHeading = styled.div`
  font-weight: 600;
`;

export const PostsTableRow = styled.div`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${({ theme }) => theme.color.table.border};
  ${GridTemplate}

  & > div {
    padding: 0.625em; /* 10px */

    ${BorderRight}
    ${EllipseText}
  }
`;
