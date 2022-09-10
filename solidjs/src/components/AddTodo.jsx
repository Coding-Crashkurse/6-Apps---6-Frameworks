import { createSignal } from "solid-js";

const AddTodo = ({ onAddTodo }) => {
  const [getText, setText] = createSignal("");

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="todo"
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="submit"
          id="todohandler"
          onClick={() => onAddTodo(event, getText())}
        />
      </form>
    </>
  );
};

export default AddTodo;
