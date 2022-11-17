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
      <div className="todo-view__content">
        <span className="todo-view__label">Title:</span>
        {title} <br />
        <span className="todo-view__label">Completed:</span>{' '}
        {completed.toString()}
      </div>
      <div className="todo-view__complete-btn">
        {!completed && (
          <button
            className="btn"
            onClick={() => {
              handleTodoComplete(id);
            }}
          >
            Mark Completed
          </button>
        )}
      </div>
    </StyledTodoView>
  );
}
