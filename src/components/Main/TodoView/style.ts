import styled from 'styled-components';

export const StyledTodoView = styled.li`
  border: 1px solid ${(params) => params.theme.color.orange};
  padding: 1rem;
  display: flex;
  .todo-view__content {
    flex: 1;
    .todo-view__label {
      font-weight: 300;
      text-decoration-line: underline;
      margin-right: 0.4rem;
    }
  }
  button {
    background: transparent;
    border: 1px solid ${(params) => params.theme.color.lightseagreen};
    @media ((max-width: 600px)) {
      font-size: 0.7rem;
      padding: 4px 6px;
    }
    @media ((max-width: 450px)) {
      font-size: 0.5rem;
      padding: 4px 6px;
    }
  }
`;
