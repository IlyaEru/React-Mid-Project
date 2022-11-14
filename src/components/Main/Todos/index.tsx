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
          <header>
            <h2>New Todo - {userName}</h2>
          </header>
          <form>
            <label htmlFor={`${todosData[0].userId}-new-todo__title`}>
              Title :
            </label>
            <input
              onChange={(e) => setNewTodoTitle(e.target.value)}
              type="text"
              id={`${todosData[0].userId}-new-todo__title`}
            />
            <button onClick={handleNewTodoCancel}>Cancel</button>
            <button onClick={handleNewTodoAdd}>Add</button>
          </form>
        </>
      ) : (
        <>
          <header>
            <h2>Todos - {userName}</h2>
            <button onClick={() => setIsAddingNewTodo(true)}>Add</button>
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
