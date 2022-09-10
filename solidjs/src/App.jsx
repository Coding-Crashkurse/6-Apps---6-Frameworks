import styles from "./App.module.css";
import Warning from "./components/Warning";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { createSignal } from "solid-js";

function App() {
  const [getTodos, setTodos] = createSignal([]);

  const addTodo = (event, value) => {
    event.preventDefault();
    let mytodos = [...getTodos(), { desc: value }];
    setTodos(mytodos);
  };

  return (
    <div class={styles.todowrapper}>
      <div class={styles.todocontainer}>
        <h2 id="todolength">Offene Todos: {getTodos().length}</h2>

        <ul>
          <For each={getTodos()}>
            {(item, index) => <Todo todo={item.desc} key={index}></Todo>}
          </For>
          {/* {getTodos().map((item, index) => {
            return <Todo todo={item.desc} key={index}></Todo>;
          })} */}
        </ul>
        <AddTodo onAddTodo={addTodo}></AddTodo>
        {/* {getTodos().length > 3 ? <Warning></Warning> : ""} */}
        <Show when={getTodos().length > 3}>
          <Warning></Warning>
        </Show>
      </div>
    </div>
  );
}

export default App;
