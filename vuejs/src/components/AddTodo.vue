<template>
  <form action="">
    <input type="text" placeholder="todo" id="todovalue" v-model="value" />
    <input type="submit" id="todohandler" @click.prevent="onAddTodo(value)" />
  </form>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");

defineProps({
  onAddTodo: Function,
});
</script>
