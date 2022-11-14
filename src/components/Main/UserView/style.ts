import styled from 'styled-components';

export const StyledUserView = styled.li<{
  isUncompletedTodo: boolean;
  isSelected: boolean;
}>`
  border: ${(props) =>
    props.isUncompletedTodo ? '1px solid red' : '1px solid green'};
  background-color: ${(props) => (props.isSelected ? 'orange' : 'inherit')};
`;
