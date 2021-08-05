import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./addTodo.js";
import { SingleTodo } from "./SingleTodo.js";
import { fetchTodos } from "./todo.slice.js";
const Todo = () => {
  const todos = useSelector((state) => state.todoList);
  const pending = useSelector((state) => state.pending);
  const error = useSelector((state) => state.error);
  console.log(todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div>
      <AddTodo />
      {pending && <p>It's Loading...</p>}
      {error || todos.map((todo) => <SingleTodo todo={todo} key={todo.id} />)}
    </div>
  );
};

export default Todo;
