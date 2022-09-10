<script>
// @ts-nocheck

  import Warning from "./lib/Warning.svelte";
  import AddTodo from "./lib/AddTodo.svelte";
  import Todo from "./lib/Todo.svelte"

let todos = []

const addTodo = (value) => {
  console.log(value)
  todos = [...todos, {desc: value}]
}
</script>


<div class="todowrapper">
  <div class="todocontainer">
    <h2 id="todolength">Offene Todos: {todos.length}</h2>
    <ul class="todolist">
{#each todos as new_todo}
 <Todo todo={new_todo.desc}></Todo>
{/each}
    </ul>

    <AddTodo addTodo={addTodo}></AddTodo>
{#if todos.length > 3}
<Warning></Warning>
{/if}

  </div>
</div>
<style>
  .todowrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .todocontainer {
    border: 1px solid black;
    padding: 20px;
    border-radius: 5px;
    background-color: #f4f4f4;
  }
</style>
