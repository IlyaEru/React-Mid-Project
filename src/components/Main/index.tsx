import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { StyledMain } from './style';
import {
  fetchPosts,
  fetchTodos,
  fetchUsers,
  Post,
  Todo,
  User,
} from '../../helpers/utils';
import Users from './Users';
import UserSearch from './UserSearch';
import NewUser from './NewUser';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[] | []>([]);
  const [originalUsers, setOriginalUsers] = useState<User[] | []>([]);
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [isAddingNewUser, setIsAddingNewUser] = useState(false);

  const getAllData = async () => {
    const [usersData, todosData, postsData] = await Promise.all([
      fetchUsers(),
      fetchTodos(),
      fetchPosts(),
    ]);
    setUsers(usersData);
    setOriginalUsers(usersData);
    setTodos(todosData);
    setPosts(postsData);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllData();
  }, []);

  const handleUsersSearch = (searchText: string) => {
    setIsLoading(true);
    setUsers(
      originalUsers.filter((user) => {
        return (
          user.name.includes(searchText) || user.email.includes(searchText)
        );
      }),
    );
    setIsLoading(false);
  };

  const handleUserDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
    setOriginalUsers(users.filter((user) => user.id !== userId));
  };

  const handleUserUpdate = (updatedUser: User) => {
    console.log(updatedUser);
    setOriginalUsers([
      ...originalUsers.filter((user) => user.id !== updatedUser.id),
      updatedUser,
    ]);
    setUsers([
      ...originalUsers.filter((user) => user.id !== updatedUser.id),
      updatedUser,
    ]);
  };

  const handleTodoComplete = (todoId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo,
      ),
    );
  };

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => {
      return [...prevPosts, post];
    });
  };

  const handleAddUser = (user: User) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <StyledMain>
      {isLoading ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        <>
          <UserSearch
            setIsAddingNewUser={setIsAddingNewUser}
            handleUsersSearch={handleUsersSearch}
          />
          {isAddingNewUser && (
            <NewUser
              lastUserId={
                users.sort((userA, userB) => userB.id - userA.id)[0].id
              }
              handleAddUser={handleAddUser}
              setIsAddingNewUser={setIsAddingNewUser}
            />
          )}
          <Users
            handleUserDelete={handleUserDelete}
            handleUserUpdate={handleUserUpdate}
            handleTodoComplete={handleTodoComplete}
            handleAddTodo={handleAddTodo}
            handleAddPost={handleAddPost}
            usersData={users}
            todosData={todos}
            postsData={posts}
            isAddingNewUser={isAddingNewUser}
          />
        </>
      )}
    </StyledMain>
  );
}
