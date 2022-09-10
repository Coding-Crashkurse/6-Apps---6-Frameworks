import React from "react";
import { useRef } from "react";

const AddTodo = ({ onAddTodo }) => {
  const todoInputRef = useRef();

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="todo"
          id="todovalue"
          ref={todoInputRef}
        />
        <input
          type="submit"
          id="todohandler"
          onClick={() => onAddTodo(event, todoInputRef.current.value)}
        />
      </form>
    </>
  );
};

export default AddTodo;
