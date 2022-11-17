import styled from 'styled-components';

export const StyledUserView = styled.li<{
  isUncompletedTodo: boolean;
  isSelected: boolean;
}>`
  grid-column-start: 1;
  border: ${(props) =>
    props.isUncompletedTodo ? '1px solid red' : '1px solid green'};
  background-color: ${(props) => (props.isSelected ? '#ffa5000d' : '#FFF')};
  padding: 1.5rem 2rem;
  border-radius: 5px;
  box-shadow: 0 0 6px 0px #0000004d;
  width: 30rem;

  font-size: 1.1rem;
  .user-view__id-label {
    cursor: pointer;
    flex: 0;
    margin-right: 1rem;
  }
  .user-view__input-field {
    display: flex;
  }
  label {
    flex: 1;
    font-weight: 300;
  }
  input {
    border-bottom: 0.4px solid ${(props) => props.theme.color.silver};
    background: transparent;
    flex: 3;
    font-size: 1rem;
    width: 10rem;
  }
  .user-view__btn-group {
    margin-top: 1rem;
    display: flex;
    gap: 0.4rem;
    .btn {
      height: 1rem;
      background-color: transparent;
      font-size: 0.9rem;
    }
    .user-view__data-btn {
      border: 0.1rem solid ${(props) => props.theme.color.silver};
      margin-right: 1rem;
    }
    .user-view__update-btn {
      border: 0.1rem solid ${(props) => props.theme.color.lightseagreen};
      color: ${(props) => props.theme.color.lightseagreen};
      margin-left: auto;
    }
    .user-view__delete-btn {
      border: 0.1rem solid ${(props) => props.theme.color.darkDanger};
      color: ${(props) => props.theme.color.darkDanger};
    }
    @media ((max-width: 600px)) {
      font-size: 0.8rem;
      .btn {
        height: 0.7rem;
        font-size: 0.5rem;
      }
    }
  }
  @media ((max-width: 1000px)) {
    width: 20rem;
    .user-view__input-field {
      label {
        font-size: 0.8rem;
      }
    }
    .user-view__btn-group .btn {
      height: 0.7rem;
      font-size: 0.8rem;
      padding: 18px 6px;
      width: 4rem;
      &.user-view__data-btn {
        width: 10rem;
      }
    }
  }
  @media ((max-width: 1000px)) {
    input {
      font-size: 0.8rem;
    }
  }
  @media ((max-width: 768px)) {
    width: 30rem;
  }
  @media ((max-width: 600px)) {
    width: 24rem;
    font-size: 0.8rem;
    input {
      font-size: 0.7rem;
    }
  }
  @media ((max-width: 450px)) {
    width: 20rem;
    font-size: 0.8rem;
    input {
      font-size: 0.7rem;
    }
  }
`;
