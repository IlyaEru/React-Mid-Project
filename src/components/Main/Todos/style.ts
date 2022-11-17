import styled from 'styled-components';

export const StyledTodos = styled.section`
  @media ((min-width: 768px)) {
    grid-column-start: 2;
  }
  background-color: #fff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
  .todos-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid ${(params) => params.theme.color.silver};

    h2 {
      font-size: 1.2rem;
    }
    button {
      background: transparent;
      border: 1px solid ${(params) => params.theme.color.orange};
    }
  }
  .new-todo__form {
    font-size: 1.1rem;

    padding: 1rem 2rem;
    .new-todo__form-input {
      display: flex;
      label {
        font-weight: 300;
        margin-right: 0.5rem;
        width: 3rem;
      }
      input {
        border-bottom: 0.4px solid ${(props) => props.theme.color.silver};
        background: transparent;
        flex: 1;
        font-size: 1rem;
      }
    }
    .new-todo__form-btns {
      display: flex;
      justify-content: space-evenly;
      padding: 1rem;
      button {
        background-color: transparent;
        &.new-todo-cancel-btn {
          border: 2px solid black;
        }
        &.new-todo-add-btn {
          border: 2px solid ${(params) => params.theme.color.orange};
        }
      }
    }
  }
  ul {
    padding: 0 2rem;
    margin-top: 1rem;
    max-height: 200px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    width: 30rem;
  }
  @media ((max-width: 1000px)) {
    .todos-header h2 {
      font-size: 1.1rem;
    }
    ul {
      width: 20rem;
      font-size: 0.8rem;
    }
    .btn {
      padding: 6px 10px;
      font-size: 0.8rem;
      margin-right: -9px;
    }
  }
  @media ((max-width: 768px)) {
    ul {
      width: 30rem;
    }
    .todos-header h2 {
      font-size: 1rem;
    }
    .todos-header button {
      font-size: 0.7rem;
      padding: 6px 10px;
    }
  }
  @media ((max-width: 600px)) {
    ul {
      width: 24rem;
    }
  }
  @media ((max-width: 450px)) {
    ul {
      width: 20rem;
    }
  }
`;
