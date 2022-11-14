import React from 'react';
import { StyledTodoView } from './style';
import { Todo } from '../../../helpers/utils';

interface TodoViewProps extends Todo {
  handleTodoComplete: (todoId: number) => void;
}

export default function TodoView({
  userId,
  id,
  title,
  completed,
  handleTodoComplete,
}: TodoViewProps) {
  return (
    <StyledTodoView>
      Title: {title} <br />
      Completed: {completed.toString()} <br />
      {!completed && (
        <button
          onClick={() => {
            handleTodoComplete(id);
          }}
        >
          Mark Completed
        </button>
      )}
    </StyledTodoView>
  );
}
