import React, { useState } from 'react';
import { Todo } from '../../../helpers/utils';
import TodoView from '../TodoView';
import { StyledTodos } from './style';

interface TodosProps {
  userName: string;
  userId: number;
  lastTodoId: number;
  todosData: Todo[];
  handleTodoComplete: (todoId: number) => void;
  handleAddTodo: (todo: Todo) => void;
}

export default function Todos({
  userName,
  userId,
  todosData,
  handleTodoComplete,
  handleAddTodo,
  lastTodoId,
}: TodosProps) {
  const [isAddingNewTodo, setIsAddingNewTodo] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const handleNewTodoAdd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    if (newTodoTitle.length !== 0) {
      handleAddTodo({
        userId: userId,
        title: newTodoTitle,
        completed: false,
        id: lastTodoId + 1,
      });
      setNewTodoTitle('');
      setIsAddingNewTodo(false);
    }
  };
  const handleNewTodoCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.nativeEvent.preventDefault();
    setIsAddingNewTodo(false);
  };
  return (
    <StyledTodos>
      {isAddingNewTodo ? (
        <>
          <header className="todos-header">
            <h2>New Todo - {userName}</h2>
          </header>
          <form className="new-todo__form">
            <div className="new-todo__form-input">
              <label htmlFor={`${todosData[0].userId}-new-todo__title`}>
                Title :
              </label>
              <input
                onChange={(e) => setNewTodoTitle(e.target.value)}
                type="text"
                id={`${todosData[0].userId}-new-todo__title`}
              />
            </div>
            <div className="new-todo__form-btns">
              <button
                className="btn new-todo-cancel-btn"
                onClick={handleNewTodoCancel}
              >
                Cancel
              </button>
              <button
                className="btn new-todo-add-btn"
                onClick={handleNewTodoAdd}
              >
                Add
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <header className="todos-header">
            <h2>Todos - {userName}</h2>
            <button className="btn" onClick={() => setIsAddingNewTodo(true)}>
              Add
            </button>
          </header>
          <ul>
            {todosData.map((todo) => (
              <TodoView
                handleTodoComplete={handleTodoComplete}
                {...todo}
                key={todo.id}
              />
            ))}
          </ul>
        </>
      )}
    </StyledTodos>
  );
}
