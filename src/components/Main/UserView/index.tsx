import React, { useEffect, useState } from 'react';
import { Post, Todo, User } from '../../../helpers/utils';
import Posts from '../Posts';
import Todos from '../Todos';
import { StyledUserView } from './style';

interface UserViewProps {
  userData: User;
  todosData: Todo[];
  postsData: Post[];
  handleUserDelete: (userId: number) => void;
  handleUserUpdate: (updatedUser: User) => void;
  handleTodoComplete: (todoId: number) => void;
  handleAddTodo: (todo: Todo) => void;
  handleAddPost: (post: Post) => void;
  lastTodoId: number;
  lastPostId: number;
  isAddingNewUser: boolean;
}

export default function UserView({
  userData,
  todosData,
  postsData,
  handleUserDelete,
  handleUserUpdate,
  handleTodoComplete,
  handleAddTodo,
  handleAddPost,
  lastTodoId,
  lastPostId,
  isAddingNewUser,
}: UserViewProps) {
  const [isUncompletedTodo, setIsUncompletedTodo] = useState(false);
  const [isShowOtherData, setIsShowOtherData] = useState(false);
  const [user, setUser] = useState<User | any>({});
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    if (todosData.find((todo) => todo.completed === false)) {
      setIsUncompletedTodo(true);
    } else {
      setIsUncompletedTodo(false);
    }
    setUser({ ...userData });
  }, [todosData]);
  return (
    <>
      <StyledUserView
        isSelected={isSelected}
        isUncompletedTodo={isUncompletedTodo}
      >
        <div className="user-view__input-field">
          <label
            className="user-view__id-label"
            onClick={() => {
              setIsSelected(!isSelected);
            }}
            htmlFor={`${user.id}-user-id`}
          >
            ID:
          </label>{' '}
          {user.id}
        </div>
        <div className="user-view__input-field">
          <label htmlFor={`${user.id}-name-input`}>Name:</label>{' '}
          <input
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
            id={`${user.id}-name-input`}
            type="text"
            value={user.name}
          />{' '}
        </div>
        <div className="user-view__input-field">
          <label htmlFor={`${user.id}-email-input`}>Email:</label>{' '}
          <input
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
            id={`${user.id}-email-input`}
            type="text"
            value={user.email}
          />{' '}
        </div>
        {isShowOtherData && (
          <section className="other-data">
            <div className="user-view__input-field">
              <label htmlFor={`${user.id}-street-input`}>Street:</label>{' '}
              <input
                onChange={(e) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      street: e.target.value,
                    },
                  })
                }
                id={`${user.id}-street-input`}
                type="text"
                value={user.address.street}
              />{' '}
            </div>
            <div className="user-view__input-field">
              <label htmlFor={`${user.id}-city-input`}>City:</label>{' '}
              <input
                id={`${user.id}-city-input`}
                type="text"
                value={user.address.city}
                onChange={(e) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      city: e.target.value,
                    },
                  })
                }
              />{' '}
            </div>
            <div className="user-view__input-field">
              <label htmlFor={`${user.id}-zip-code-input`}>Zip Code:</label>{' '}
              <input
                id={`${user.id}-zip-code-input`}
                type="text"
                value={user.address.zipcode}
                onChange={(e) =>
                  setUser({
                    ...user,
                    address: {
                      ...user.address,
                      zipcode: e.target.value,
                    },
                  })
                }
              />{' '}
            </div>
          </section>
        )}
        <div className="user-view__btn-group">
          <button
            className="btn user-view__data-btn"
            onClick={() => {
              setIsShowOtherData(!isShowOtherData);
            }}
          >
            {isShowOtherData ? 'Hide Other Data' : 'Show Other Data'}
          </button>
          <button
            className="btn user-view__update-btn"
            onClick={() => handleUserUpdate(user)}
          >
            Update
          </button>
          <button
            className="btn user-view__delete-btn"
            onClick={() => {
              handleUserDelete(user.id);
            }}
          >
            Delete
          </button>
        </div>
      </StyledUserView>
      {isSelected && !isAddingNewUser && (
        <>
          <Todos
            handleTodoComplete={handleTodoComplete}
            handleAddTodo={handleAddTodo}
            todosData={todosData}
            lastTodoId={lastTodoId}
            userId={user.id}
            userName={user.name}
          />
          <Posts
            handleAddPost={handleAddPost}
            postsData={postsData}
            userId={user.id}
            lastPostId={lastPostId}
            userName={user.name}
          />{' '}
        </>
      )}
    </>
  );
}
