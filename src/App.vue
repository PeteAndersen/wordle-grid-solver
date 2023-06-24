<script setup>
import { onMounted, onUnmounted } from "vue";

import { useWordGridStore } from "@/stores/grid";
import Board from "@/components/Board.vue";

const wordGrid = useWordGridStore();

const onKeyDown = (event) => {
  if (event.key === "Backspace") {
    wordGrid.removeLetter();
  } else if (!event.repeat && event.keyCode >= 65 && event.keyCode <= 90) {
    wordGrid.addLetter(String.fromCharCode(event.keyCode));
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <header>
    <h1>Grid solver</h1>
  </header>
  <main>
    <Board></Board>
  </main>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background-color: rgb(18, 18, 19);
  color: white;
}
</style>
