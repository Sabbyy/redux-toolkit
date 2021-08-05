import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    const todo = {
      id: Math.floor(Math.random() * 100),
      title: text,
      completed: false,
    };
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
        onChange={(e) => {
          if (e.target.value) setText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};
export default AddTodo;
