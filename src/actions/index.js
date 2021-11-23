import {
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from "./types";
import axios from "axios";
import todos from "../apis/todos";
const URL = "https://todo-example-backend.herokuapp.com/api/v1/todos/";

export const createTodo = (formValues) => async (dispatch, getState) => {
  const id = getState().todos.length;
  const response = await axios.post(URL, { ...formValues, id });

  dispatch({ type: CREATE_TODO, payload: response.data });
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get();
  console.log(response);
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await todos.get(`/${id}/`);
  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todos.put(`/${id}/`, formValues);
  dispatch({ type: EDIT_TODO, payload: response.data });
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
};

export const toggleTodo =
  ({ id, done }) =>
  async (dispatch) => {
    const response = await todos.put(`/${id}/`, { done: !done });
    dispatch({ type: TOGGLE_TODO, payload: response.data });
  };
