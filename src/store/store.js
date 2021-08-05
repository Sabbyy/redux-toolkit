import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../app/todo/todo.slice";

export default configureStore({
  reducer: TodoSlice,
});
