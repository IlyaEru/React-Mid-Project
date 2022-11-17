import styled from 'styled-components';

export const StyledPostView = styled.li`
  border: 1px solid ${(params) => params.theme.color.forest};
  padding: 1rem;
  list-style: none;
  .post-view__label {
    font-weight: 300;
    text-decoration-line: underline;
    margin-right: 0.4rem;
  }
`;
