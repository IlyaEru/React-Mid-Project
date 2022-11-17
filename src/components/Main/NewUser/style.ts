import styled from 'styled-components';

export const StyledNewUser = styled.section`
  background-color: #fff;
  box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
  margin: 1rem;
  .new-user__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid ${(params) => params.theme.color.silver};
    h2 {
      font-size: 1.2rem;
    }
  }

  .new-user__form {
    font-size: 1.1rem;

    padding: 1rem 2rem;
    .new-user__form-input {
      display: flex;
      label {
        font-weight: 300;
        margin-right: 0.5rem;
        width: 4rem;
      }
      input {
        border-bottom: 0.4px solid ${(props) => props.theme.color.silver};
        background: transparent;
        flex: 1;
        font-size: 1rem;
      }
    }
    .new-user__form-btns {
      display: flex;
      justify-content: space-evenly;
      padding: 1rem;
      button {
        background-color: transparent;
        &.new-user-cancel-btn {
          border: 2px solid black;
        }
        &.new-user-add-btn {
          border: 2px solid ${(params) => params.theme.color.lightseagreen};
        }
      }
    }
  }
  @media ((max-width: 600px)) {
    width: 20rem;
    .new-user__header {
      h2 {
        font-size: 0.8rem;
      }
    }
    .new-user__form {
      font-size: 0.8rem;
    }
    .btn {
      height: 0.7rem;
      font-size: 0.6rem;
    }
  }
`;
