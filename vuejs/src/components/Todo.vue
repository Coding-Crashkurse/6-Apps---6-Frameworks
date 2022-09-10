<template>
  <li>
    <a href="">{{ todo }}</a>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  todo: String,
});
</script>

<style scoped>
a {
  list-style: none;
  text-decoration: none;
  color: black;
}
</style>
