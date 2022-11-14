import axios from 'axios';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';

interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchUsers = async () => {
  const { data } = await axios.get<User[]>(usersUrl);
  return data;
};

const fetchTodos = async () => {
  const { data } = await axios.get<Todo[]>(todosUrl);
  return data;
};

const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>(postsUrl);
  return data;
};

export { fetchUsers, fetchTodos, fetchPosts };
