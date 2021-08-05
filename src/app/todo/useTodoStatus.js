import React from "react";
import { useSelector } from "react-redux";

export const useTodoStatus = ({ id }) => {
  const todos = useSelector((state) => state.todoList);
  const found = todos.find((todo) => todo.id === id);
  if (found === undefined) return null;
  return found.completed;
};
