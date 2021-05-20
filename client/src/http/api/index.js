import axios from 'axios';

const url = 'http://localhost:5000/todoApi';

export const fetchRootTodos = () => axios.get(url);

export const createTodo = (newTodo) => axios.post(url, newTodo);

export const fetchTodos = (parentId) => axios.get(`${url}/${parentId}`);

export const fetchTodoDetailsById = (id) => axios.get(`${url}/todo/${id}`);