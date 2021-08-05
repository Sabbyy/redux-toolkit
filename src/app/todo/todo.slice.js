import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = createAsyncThunk("todos/add", async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});
export const removeTodo = createAsyncThunk("todo/remove", async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return { response: response.data, id };
});
const initialState = {
  todoList: [],
  loading: false,
  error: "",
};
const TodoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [removeTodo.fulfilled]: (state, action) => {
      console.log("remove", action);
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
});
export default TodoSlice.reducer;
