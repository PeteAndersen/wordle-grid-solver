<script setup>
import { useWordGridStore } from "@/stores/grid";

const wordGrid = useWordGridStore();
</script>

<template>
  <div id="board-container">
    <div
      v-for="(n, i) in 30"
      :key="i"
      :class="`letter ${wordGrid.colors[i] || ''}`"
      @click="wordGrid.toggleColorAt(i)"
    >
      {{ wordGrid.letters[i] }}
    </div>
  </div>
</template>

<style scoped>
#board-container {
  display: grid;
  grid-template-columns: repeat(5, 50px [col-start]);
  grid-template-rows: repeat(6, 50px);
  column-gap: 5px;
  row-gap: 5px;
  width: 520px;
  user-select: none;
}

.letter {
  align-self: stretch;
  justify-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 2rem;
  color: white;
}

.letter:empty {
  border: 1px solid rgb(58, 58, 60);
}

.letter:not(:empty) {
  background-color: rgb(58, 58, 60);
}

.letter.green {
  background-color: rgb(83, 141, 78);
}

.letter.yellow {
  background-color: rgb(181, 159, 59);
}
</style>
