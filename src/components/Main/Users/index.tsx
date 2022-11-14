import React from 'react';
import { Post, Todo, User } from '../../../helpers/utils';
import UserView from '../UserView';
import { StyledUsers } from './style';

interface Props {
  isAddingNewUser: boolean;
  usersData: User[] | [];
  todosData: Todo[] | [];
  postsData: Post[] | [];
  handleUserDelete: (userId: number) => void;
  handleUserUpdate: (updatedUser: User) => void;
  handleTodoComplete: (todoId: number) => void;
  handleAddTodo: (todo: Todo) => void;
  handleAddPost: (post: Post) => void;
}

export default function Users({
  isAddingNewUser,
  usersData,
  todosData,
  postsData,
  handleUserUpdate,
  handleUserDelete,
  handleTodoComplete,
  handleAddTodo,
  handleAddPost,
}: Props) {
  return (
    <StyledUsers>
      <ul>
        {usersData
          .sort((a, b) => a.id - b.id)
          .map((userData) => (
            <UserView
              handleTodoComplete={handleTodoComplete}
              handleAddTodo={handleAddTodo}
              handleAddPost={handleAddPost}
              isAddingNewUser={isAddingNewUser}
              key={userData.id}
              userData={userData}
              lastTodoId={
                todosData.sort((todoA, todoB) => todoB.id - todoA.id)[0].id
              }
              lastPostId={
                postsData.sort((postA, postB) => postB.id - postA.id)[0].id
              }
              todosData={todosData.filter(
                (todo) => todo.userId === userData.id,
              )}
              postsData={postsData.filter(
                (post) => post.userId === userData.id,
              )}
              handleUserDelete={handleUserDelete}
              handleUserUpdate={handleUserUpdate}
            />
          ))}
      </ul>
    </StyledUsers>
  );
}
