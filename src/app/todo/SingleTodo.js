import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./todo.slice";
import { useTodoStatus } from "./useTodoStatus";

export const SingleTodo = ({ todo }) => {
  const status = useTodoStatus({ id: todo.id });
  const dispatch = useDispatch();
  return (
    <div>
      <span
        style={{ color: "red" }}
        onClick={() => {
          dispatch(removeTodo(todo.id));
        }}
      >
        X
      </span>
      <div style={{ textDecoration: status ? "line-through" : "none" }}>
        {todo.title}
      </div>
    </div>
  );
};
