<script setup>
import { ref, reactive } from "vue";

let state = reactive({
  todos: [],
});

const addTodo = (value) => {
  let newval = { desc: value };
  state.todos.push(newval);
};

import Warning from "./components/Warning.vue";
import AddTodo from "./components/AddTodo.vue";
import Todo from "./components/Todo.vue";
</script>

<template>
  <div class="todowrapper">
    <div class="todocontainer">
      <h2>Offene Todos: {{ state.todos.length }}</h2>
      <AddTodo :onAddTodo="addTodo"></AddTodo>
      <ul>
        <li v-for="item in state.todos" :key="item.desc">
          <Todo :todo="item.desc"></Todo>
        </li>
      </ul>
      <Warning v-if="state.todos.length > 3"></Warning>
    </div>
  </div>
</template>

<style scoped>
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
